<script lang="ts">
	interface Window {
		BYOB_CORE?: {
			connectToViteHMR: (hot: any) => void;
		};
	}

	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
	import { onMount } from 'svelte';
	import { browser, dev } from '$app/environment';

	onMount(() => {
		if (browser && dev && typeof window != 'undefined') {
			if (window.BYOB_CORE && typeof window.BYOB_CORE.connectToViteHMR === 'function') {
				window.BYOB_CORE.connectToViteHMR(import.meta.hot);
			} else {
				console.warn(
					'[BYOB Layout] HMR connector function not found. Ensure the main byob.ts script is loaded correctly before this component.'
				);
			}
		}
	});
	
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}
