import devtoolsJson from 'vite-plugin-devtools-json';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { svelteTagger } from "svelte-tagger";
import { defineConfig, type PluginOption } from 'vite';
import { projectExporter } from "vite-zipper";

export default defineConfig({
	plugins: [
		svelteTagger({
			suffix: '',
			enhancedDebug: true,
			exclude:['.svelte-kit']
		}) as PluginOption,
		projectExporter({
			allowedOrigin: 'http://localhost:5176'
		}),
		tailwindcss(), sveltekit(), devtoolsJson(),

	],
	server: {
		watch: {
			ignored: ["**/node_modules/**", "**/.git/**", "**/.svelte-kit/**"]
		}
	},
	ssr: {
		noExternal: ["svelte-hero-icons"],
	},
});
