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
		return response({ object: { key, size: object.size ?? null, uploaded: object.uploaded ?? null } });
	}

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
	const file = form.get('file');
	const key = String(form.get('key') || '').trim();
	if (!(file instanceof File)) return response({ ok: false, error: 'file is required' }, 400);
	if (!key) return response({ ok: false, error: 'key is required' }, 400);
	await bucket.put(key, await file.arrayBuffer(), {
		httpMetadata: { contentType: file.type || 'application/octet-stream' },
		customMetadata: { originalName: file.name },
	});
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
