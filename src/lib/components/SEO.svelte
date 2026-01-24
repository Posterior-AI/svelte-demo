<script lang="ts">
	import SvelteSeo from 'svelte-seo';
	import { page } from '$app/stores';

	let {
		title = 'New Project',
		description = 'A web application built with BYOB.',
		keywords = 'web app, sveltekit, byob',
		canonical = '',
		noindex = false,
		nofollow = false,
		// Default to website
		type = 'website',
		// Images for sharing
		ogImages = [],
		twitterImage = '',
		twitterCard = 'summary_large_image',
		// Structured Data
		breadcrumbs = [],
		jsonLd = {},
		applicationName = 'BYOB App'
	} = $props();

	// Dynamic Base URL Logic (Defaults to byob.page, uses window/page origin if available)
	let siteUrl = $derived($page.url ? $page.url.origin : 'https://byob.page');
	let currentPath = $derived($page.url ? $page.url.pathname : '/');
	
	// Auto-generate canonical if not explicit
	let finalCanonical = $derived(canonical || `${siteUrl}${currentPath}`);

	// Construct Breadcrumb JSON-LD
	let breadcrumbSchema = $derived(breadcrumbs.length > 0 ? {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		"itemListElement": breadcrumbs.map((crumb: any, index: number) => ({
			"@type": "ListItem",
			"position": index + 1,
			"name": crumb.name,
			"item": crumb.path.startsWith('http') ? crumb.path : `${siteUrl}${crumb.path}`
		}))
	} : {});

	// Merge Custom JSON-LD with Breadcrumbs
	let finalJsonLd = $derived({
		...jsonLd,
		...breadcrumbSchema
	});
</script>

<SvelteSeo
	{title}
	{description}
	{keywords}
	{applicationName}
	canonical={finalCanonical}
	{noindex}
	{nofollow}
	
	openGraph={{
		title,
		description,
		url: finalCanonical,
		type,
		images: ogImages,
		site_name: applicationName
	}}

	twitter={{
		card: twitterCard,
		site: '@byob_page', 
		title,
		description,
		image: twitterImage || (ogImages[0]?.url)
	}}

	jsonLd={finalJsonLd}
/>