import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const STATIC_ASSET_PATH_RE = /\.(?:css|js|mjs|cjs|png|jpe?g|gif|webp|avif|svg|ico|woff2?|ttf|otf|map)(?:[?#].*)?$/i;
const STATIC_ASSET_HINT_RE = /\b(?:STATIC_ASSET_ERROR|static asset|failed to load resource|asset|static)\b/i;

const isStaticAssetHttpError = ({ status, message, path }) => {
	if (status !== 404) return false;

	const text = `${message} ${path}`;
	return STATIC_ASSET_HINT_RE.test(text) || STATIC_ASSET_PATH_RE.test(path) || STATIC_ASSET_PATH_RE.test(message);
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess(), mdsvex()],
	kit: {
		adapter: adapter(),
		prerender: {
			handleHttpError: ({ status, path, referrer, referenceType, message }) => {
				const details = `${status} ${message}${referrer ? ` (${referenceType} from ${referrer})` : ''}`;

				if (isStaticAssetHttpError({ status, message, path })) {
					console.warn(details);
					return;
				}

				throw new Error(details);
			},
		}
	},
	extensions: ['.svelte', '.svx'],
};

export default config;
