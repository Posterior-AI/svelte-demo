import type { RequestHandler } from './$types';
import { handleIndexMarkdown } from '$lib/markdown-index';

export const GET: RequestHandler = (event) => handleIndexMarkdown(event);
