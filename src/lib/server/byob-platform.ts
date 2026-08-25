import type { RequestEvent } from '@sveltejs/kit';

type RuntimeEnv = Record<string, unknown>;

export function platformEnv(event: Pick<RequestEvent, 'platform'>): RuntimeEnv {
	return (event.platform?.env as RuntimeEnv | undefined) ?? {};
}

function runtimeString(event: Pick<RequestEvent, 'platform'>, key: string): string {
	const value = platformEnv(event)[key];
	return typeof value === 'string' ? value : '';
}

export function d1Token(event: Pick<RequestEvent, 'platform'>): string {
	return runtimeString(event, 'BYOB_D1_JWT');
}

export function storageToken(event: Pick<RequestEvent, 'platform'>): string {
	return runtimeString(event, 'BYOB_STORAGE_BROWSER_TOKEN');
}

export function storageBindingName(event: Pick<RequestEvent, 'platform'>): string {
	return runtimeString(event, 'BYOB_STORAGE_BINDING_NAME') || 'STORAGE';
}

export function jsonHeaders(extra: HeadersInit = {}): HeadersInit {
	return {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
		'Access-Control-Allow-Headers': 'Content-Type, Authorization',
		'Cache-Control': 'no-store',
		...extra,
	};
}
