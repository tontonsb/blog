<script>
	/** @type string */
	export let title

	/** @type string */
	export let description

	/** @type string|null */
	export let url = null
</script>

<title>{title}</title>
<meta name="description" content={description} >
<meta name="robots"content="index, follow, max-snippet:-1, max-image-preview:large" >

{#if url}
<link rel="canonical" href={url} >
{/if}
