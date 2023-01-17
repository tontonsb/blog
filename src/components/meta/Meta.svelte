<script>
	// Using https://github.com/rodneylab/sveltekit-seo for reference
	import Native from './Native.svelte'
	import OpenGraph from './OpenGraph.svelte'
	import Twitter from './Twitter.svelte'
	import config from '$lib/config.js'
	import { page } from '$app/stores'
	import { onDestroy } from 'svelte'

	export let title = config.title
	export let description = config.description

	/** @type boolean */
	export let article = false

	$: lang = $page.data.meta?.lang ?? 'lv'

	// Manual cleanup, see https://github.com/sveltejs/svelte/issues/8202
	let enabled = true
	onDestroy(() => enabled = false)
</script>

<svelte:head>
{#if enabled}
	<Native {title} {description} />
	<OpenGraph {title} {description} {article} {lang} />
	<Twitter />
{/if}
</svelte:head>
