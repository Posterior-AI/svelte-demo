import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import {
	jsonHeaders,
	platformEnv,
	storageBindingName,
	storageToken,
} from '$lib/server/byob-platform';

export const prerender = false;

const unavailable = () => new Response('Not Found', { status: 404 });

function response(payload: unknown, status = 200) {
	return json(payload, { status, headers: jsonHeaders({ 'Content-Type': 'application/json' }) });
}

function authorized(request: Request, token: string): boolean {
	return request.headers.get('Authorization') === `Bearer ${token}`;
}

export const OPTIONS: RequestHandler = async ({ platform, request }) => {
	const env = platformEnv({ platform });
	if (!env[storageBindingName({ platform })] || !storageToken({ platform })) return unavailable();
	return new Response(null, { status: 204, headers: jsonHeaders() });
};

export const GET: RequestHandler = async ({ request, platform, url }) => {
	const env = platformEnv({ platform });
	const bucket = env[storageBindingName({ platform })] as any;
	const token = storageToken({ platform });
	if (!bucket || !token) return unavailable();
	if (!authorized(request, token)) return response({ ok: false, error: 'Unauthorized' }, 401);

	const action = url.searchParams.get('action') || 'list';

	// ── Head / Get ──────────────────────────────────────────────────────
	if (action === 'get' || action === 'head') {
		const key = url.searchParams.get('key') || '';
		if (!key) return response({ ok: false, error: 'key is required' }, 400);
		const object = action === 'head' && bucket.head ? await bucket.head(key) : await bucket.get(key);
		if (!object) return response({ ok: false, error: 'File not found' }, 404);
		if (action === 'get') {
			return new Response(object.body, {
				headers: jsonHeaders({ 'Content-Type': object.httpMetadata?.contentType || 'application/octet-stream' }),
			});
		}
		// head: return metadata only
		return response({
			ok: true,
			object: {
				key,
				size: object.size ?? null,
				uploaded: object.uploaded ?? null,
				contentType: object.httpMetadata?.contentType ?? null,
				cacheControl: object.httpMetadata?.cacheControl ?? null,
				contentDisposition: object.httpMetadata?.contentDisposition ?? null,
				etag: object.etag ?? null,
				customMetadata: object.customMetadata ?? {},
			},
		});
	}

	// ── Copy (GET-style proxy for copy action) ──────────────────────────
	if (action === 'copy') {
		const sourceKey = url.searchParams.get('source_key') || '';
		const destKey = url.searchParams.get('dest_key') || '';
		if (!sourceKey || !destKey) return response({ ok: false, error: 'source_key and dest_key are required' }, 400);
		const source = await bucket.get(sourceKey);
		if (!source) return response({ ok: false, error: 'Source object not found' }, 404);
		const body = await source.arrayBuffer();
		const httpMetadata: Record<string, string> = {
			contentType: url.searchParams.get('content_type') || source.httpMetadata?.contentType || 'application/octet-stream',
		};
		const putOptions: Record<string, any> = { httpMetadata, customMetadata: source.customMetadata ?? {} };
		const sc = url.searchParams.get('storage_class');
		if (sc === 'STANDARD_IA' || sc === 'STANDARD') putOptions.storageClass = sc;
		await bucket.put(destKey, body, putOptions);
		return response({ ok: true, source_key: sourceKey, dest_key: destKey });
	}

	// ── List ────────────────────────────────────────────────────────────
	const listing = await bucket.list({
		prefix: url.searchParams.get('prefix') || undefined,
		cursor: url.searchParams.get('cursor') || undefined,
		delimiter: url.searchParams.get('delimiter') || undefined,
		limit: Math.min(1000, Math.max(1, Number(url.searchParams.get('limit') || 100))),
	});
	return response({
		ok: true,
		objects: listing.objects || [],
		prefixes: listing.delimitedPrefixes || [],
		truncated: Boolean(listing.truncated),
		cursor: listing.cursor || null,
	});
};

export const POST: RequestHandler = async ({ request, platform }) => {
	const env = platformEnv({ platform });
	const bucket = env[storageBindingName({ platform })] as any;
	const token = storageToken({ platform });
	if (!bucket || !token) return unavailable();
	if (!authorized(request, token)) return response({ ok: false, error: 'Unauthorized' }, 401);

	const form = await request.formData();
	const action = String(form.get('action') || 'put').trim();

	// ── Copy (POST-style) ───────────────────────────────────────────────
	if (action === 'copy') {
		const sourceKey = String(form.get('source_key') || '').trim();
		const destKey = String(form.get('dest_key') || '').trim();
		if (!sourceKey || !destKey) return response({ ok: false, error: 'source_key and dest_key are required' }, 400);
		const source = await bucket.get(sourceKey);
		if (!source) return response({ ok: false, error: 'Source object not found' }, 404);
		const body = await source.arrayBuffer();
		const httpMetadata: Record<string, string> = {
			contentType: String(form.get('content_type') || source.httpMetadata?.contentType || 'application/octet-stream'),
		};
		const putOptions: Record<string, any> = { httpMetadata, customMetadata: source.customMetadata ?? {} };
		const sc = form.get('storage_class');
		if (sc === 'STANDARD_IA' || sc === 'STANDARD') putOptions.storageClass = sc;
		try { await bucket.put(destKey, body, putOptions); }
		catch { delete putOptions.storageClass; await bucket.put(destKey, body, putOptions); }
		return response({ ok: true, source_key: sourceKey, dest_key: destKey });
	}

	// ── Batch delete ────────────────────────────────────────────────────
	if (action === 'delete-many') {
		const rawKeys = String(form.get('keys') || '').trim();
		const keys = rawKeys.split('\n').map(k => k.trim()).filter(Boolean);
		if (!keys.length) return response({ ok: false, error: 'keys are required' }, 400);
		if (keys.length > 1000) return response({ ok: false, error: 'Cannot delete more than 1000 objects per request' }, 400);

		const results: Array<{ key: string; ok: boolean; size?: number; error?: string }> = [];
		for (const key of keys) {
			try {
				// Best-effort head for size tracking
				let size: number | undefined;
				if (bucket.head) {
					const meta = await bucket.head(key).catch(() => null);
					size = meta?.size ?? undefined;
				}
				await bucket.delete(key);
				results.push({ key, ok: true, size });
			} catch (err: any) {
				results.push({ key, ok: false, error: String(err?.message || err) });
			}
		}
		const deleted = results.filter(r => r.ok);
		const failed  = results.filter(r => !r.ok);
		return response({ ok: failed.length === 0, deleted, failed, total: keys.length });
	}

	// ── Put (upload) ─────────────────────────────────────────────────────
	const file = form.get('file');
	const key = String(form.get('key') || '').trim();
	if (!(file instanceof File)) return response({ ok: false, error: 'file is required' }, 400);
	if (!key) return response({ ok: false, error: 'key is required' }, 400);

	const putOptions: Record<string, any> = {
		httpMetadata: { contentType: file.type || 'application/octet-stream' },
		customMetadata: { originalName: file.name },
	};
	const sc = form.get('storage_class');
	if (sc === 'STANDARD_IA' || sc === 'STANDARD') putOptions.storageClass = sc;

	try { await bucket.put(key, await file.arrayBuffer(), putOptions); }
	catch { delete putOptions.storageClass; await bucket.put(key, await file.arrayBuffer(), putOptions); }
	return response({ ok: true, object: { key, size: file.size, contentType: file.type } });
};

export const DELETE: RequestHandler = async ({ request, platform, url }) => {
	const env = platformEnv({ platform });
	const bucket = env[storageBindingName({ platform })] as any;
	const token = storageToken({ platform });
	if (!bucket || !token) return unavailable();
	if (!authorized(request, token)) return response({ ok: false, error: 'Unauthorized' }, 401);

	const key = url.searchParams.get('key') || '';
	if (!key) return response({ ok: false, error: 'key is required' }, 400);
	await bucket.delete(key);
	return response({ ok: true, deleted: true, key });
};
