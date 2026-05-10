<script>
	import Meta from '$components/meta/Meta.svelte'

	/** @type {import('./$types').PageData} */
	import { t } from '$lib/translations.js'

	export let data

	$: meta = data.meta
	$: Content = data.Content
</script>

<Meta title={meta.title} description={meta.intro} article={true} image={meta.image ?? null} />

<svelte:component this={Content} />

{#if meta.date}
<p class=date>
	{$t.blog.published} {meta.date}
</p>
{/if}

<style>
	.date {
		text-align: right;
		font-size: var(--font-sm);
	}
</style>
