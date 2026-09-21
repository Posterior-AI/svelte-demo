<script lang="ts">
	interface Window {
		BYOB_CORE?: {
			connectToViteHMR: (hot: any) => void;
		};
	}

	import '../app.css';

	let { children } = $props();
	import { onMount } from 'svelte';
	import { browser, dev } from '$app/environment';
	import { env } from '$env/dynamic/public';

	const fruitalyticsEndpoint = String(env.PUBLIC_FRUITALYTICS_ENDPOINT || '').replace(/\/$/, '');
	const fruitalyticsSiteId = String(env.PUBLIC_FRUITALYTICS_SITE_ID || '');
	const fruitalyticsWriteKey = String(env.PUBLIC_FRUITALYTICS_WRITE_KEY || '');
	const fruitalyticsEnabled = !!(
		fruitalyticsEndpoint &&
		fruitalyticsSiteId &&
		fruitalyticsWriteKey
	);

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
	{#if fruitalyticsEnabled}
		<script
			async
			src={`${fruitalyticsEndpoint}/analytics.js`}
			data-site-id={fruitalyticsSiteId}
			data-write-key={fruitalyticsWriteKey}
			data-auto-pageviews="true"
			data-auto-routes="true"
			data-autocapture="true"
			data-capture-errors="true"
			data-capture-network-errors="true"
			data-capture-performance="true"
			data-capture-scroll-depth="true"
			data-capture-outbound-links="true"
			data-capture-downloads="true"
			data-capture-rage-clicks="true"
			data-capture-impressions="true"
		></script>
	{/if}
</svelte:head>

{@render children?.()}
