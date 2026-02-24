import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	return json({ 
		success: true, 
		message: 'Hello from the Api! 🌍',
		timestamp: new Date().toISOString()
	});
};

export const POST: RequestHandler = async ({ request }) => {
	try {
		const body = await request.json();
		
		if (!body.name) {
			return json({ success: false, error: 'Name is required' }, { status: 400 });
		}

		return json({ 
			success: true, 
			message: `Welcome to the full-stack edge, ${body.name}! 🚀` 
		});
	} catch (err) {
		return json({ success: false, error: 'Invalid JSON body' }, { status: 400 });
	}
};