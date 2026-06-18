<script lang="ts">
	import '../app.css';

	let { children } = $props();
	import { onMount } from 'svelte';
	import { browser, dev } from '$app/environment';

	onMount(() => {
		if (browser && dev && typeof window != 'undefined') {
			const byobCore = (window as Window & {
				BYOB_CORE?: { connectToViteHMR?: (hot: unknown) => void };
			}).BYOB_CORE;
			if (byobCore && typeof byobCore.connectToViteHMR === 'function') {
				byobCore.connectToViteHMR(import.meta.hot);
			} else {
				console.warn(
					'[BYOB Layout] HMR connector function not found. Ensure the main byob.ts script is loaded correctly before this component.'
				);
			}
		}
	});
	
</script>

<svelte:head>
</svelte:head>

{@render children?.()}
