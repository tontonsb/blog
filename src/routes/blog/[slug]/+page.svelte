<script>
	export let data
	const {meta, Content, slug} = data
</script>

<svelte:head>
	<title>{ meta.title ?? 'Blog' }</title>
	<!--
	<meta name="description" content="Raksti. Iespējams, ka raksti.">

	-->
</svelte:head>

<Content />

{#if meta.date}
<p class=date>
	Published {meta.date}
</p>
{/if}

<style>
	.date {
		text-align: right;
		font-size: var(--font-sm);
	}
</style>
