import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { d1Token, jsonHeaders, platformEnv } from '$lib/server/byob-platform';

export const prerender = false;

const unavailable = () => new Response('Not Found', { status: 404 });

export const OPTIONS: RequestHandler = async ({ platform }) => {
	if (!platformEnv({ platform }).DB || !d1Token({ platform })) return unavailable();
	return new Response(null, { status: 204, headers: jsonHeaders() });
};

export const POST: RequestHandler = async ({ request, platform }) => {
	const token = d1Token({ platform });
	const db = platformEnv({ platform }).DB as any;
	if (!token || !db) return unavailable();

	if (request.headers.get('Authorization') !== `Bearer ${token}`) {
		return json({ success: false, error: 'Unauthorized' }, { status: 401, headers: jsonHeaders() });
	}

	try {
		const body = await request.json();
		if (body?.type === 'batch') {
			const statements = (body.stmts || []).map((statement: { sql: string; params?: unknown[] }) =>
				db.prepare(statement.sql).bind(...(statement.params || []))
			);
			return json({ success: true, data: await db.batch(statements) }, { headers: jsonHeaders() });
		}
		if (body?.type === 'exec') {
			return json({ success: true, data: await db.exec(body.sql) }, { headers: jsonHeaders() });
		}

		const statement = db.prepare(body.sql);
		const data = body.params?.length
			? await statement.bind(...body.params).all()
			: await statement.all();
		return json({ success: true, data }, { headers: jsonHeaders() });
	} catch (error) {
		return json(
			{ success: false, error: error instanceof Error ? error.message : 'Invalid request' },
			{ status: 400, headers: jsonHeaders() },
		);
	}
};
