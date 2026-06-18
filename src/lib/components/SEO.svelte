<script lang="ts">
	import { page } from '$app/stores';

	let {
		title = 'New Project',
		description = 'A web application built with BYOB.',
		keywords = 'web app, sveltekit, byob',
		canonical = '',
		noindex = false,
		nofollow = false,
		type = 'website',
		ogImages = [],
		twitterImage = '',
		twitterCard = 'summary_large_image',
		breadcrumbs = [],
		jsonLd = {},
		applicationName = 'BYOB App'
	} = $props();

	let siteUrl = $derived($page.url ? $page.url.origin : 'https://byob.page');
	let currentPath = $derived($page.url ? $page.url.pathname : '/');
	let finalCanonical = $derived(canonical || `${siteUrl}${currentPath}`);
	let robots = $derived(`${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`);
	let ogImage = $derived(ogImages[0]?.url || twitterImage || '');
	let breadcrumbSchema = $derived(
		breadcrumbs.length > 0
			? {
					'@context': 'https://schema.org',
					'@type': 'BreadcrumbList',
					itemListElement: breadcrumbs.map((crumb: any, index: number) => ({
						'@type': 'ListItem',
						position: index + 1,
						name: crumb.name,
						item: crumb.path.startsWith('http') ? crumb.path : `${siteUrl}${crumb.path}`
					}))
				}
			: {}
	);
	let finalJsonLd = $derived({ ...jsonLd, ...breadcrumbSchema });
	let jsonLdText = $derived(JSON.stringify(finalJsonLd));
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />
	<meta name="application-name" content={applicationName} />
	<meta name="robots" content={robots} />
	<link rel="canonical" href={finalCanonical} />

	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={finalCanonical} />
	<meta property="og:type" content={type} />
	<meta property="og:site_name" content={applicationName} />
	{#if ogImage}
		<meta property="og:image" content={ogImage} />
	{/if}

	<meta name="twitter:card" content={twitterCard} />
	<meta name="twitter:site" content="@byob_page" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	{#if ogImage}
		<meta name="twitter:image" content={ogImage} />
	{/if}

	{#if Object.keys(finalJsonLd).length > 0}
		<script type="application/ld+json">{jsonLdText}</script>
	{/if}
</svelte:head>
