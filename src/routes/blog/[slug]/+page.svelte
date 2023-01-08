<script>
	import Meta from '$components/meta/Meta.svelte'

	/** @type {import('./$types').PageData} */
	export let data
	const {meta, Content} = data
</script>

<Meta title={meta.title} description={meta.intro} article={true} />

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
