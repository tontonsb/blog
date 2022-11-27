<script>
	export let data
	const {meta, Content, slug} = data
</script>

<svelte:head>
	<title>{ meta.title ?? 'Blog' }</title>
	<meta name="description" content="{meta.intro}">
</svelte:head>

<Content />

{#if meta.date}
<p class=date>
	Publicēts {meta.date}
</p>
{/if}

<style>
	.date {
		text-align: right;
		font-size: var(--font-sm);
	}
</style>
