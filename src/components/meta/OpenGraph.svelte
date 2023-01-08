<script>
	import config from '$lib/config.js'
	import { page } from '$app/stores'

	/** @type string */
	export let title

	/** @type string */
	export let description

	/** @type string|null */
	export let url = null

	/** @type boolean */
	export let article

	/** @type string */
	export let lang

	/** @type Record<string, string> */
	const locales = {
		lv: 'lv_LV',
		en: 'en_US',
	}

	$: locale = locales[lang] ?? 'lv_LV'

	$: pagedata = $page.data.meta
</script>

<meta property="og:site_name" content={config.title} >
<meta property="og:locale" content={locale} >
<meta property="og:type" content={article ? 'article' : 'website'} >
<meta property="og:title" content={title} >
<meta property="og:description" content={description} >

{#if url}
	<meta property="og:url" content={url} >
{/if}

{#if article && pagedata}
	<meta property="article:published_time" content={pagedata.date ?? ''} >

	{#if pagedata.updated}
		<meta property="article:modified_time" content={pagedata.updated} >
	{/if}
{/if}

<!--
{#if image}
<meta property="og:image" content={image.url} />
<meta property="og:image:alt" content={image.alt} />
{/if}
-->
