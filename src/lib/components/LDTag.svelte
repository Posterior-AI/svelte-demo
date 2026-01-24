<script lang="ts">
	let { schema } = $props();
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${JSON.stringify(schema, null, 2)}</script>`}
</svelte:head>