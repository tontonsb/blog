<script>
	// Using https://github.com/rodneylab/sveltekit-seo for reference
	import Native from './Native.svelte'
	import OpenGraph from './OpenGraph.svelte'
	import Twitter from './Twitter.svelte'
	import { canonical } from '$lib/url.js'
	import config from '$lib/config.js'
	import { page } from '$app/stores'

	export let title = config.title
	export let description = config.description

	/** @type boolean */
	export let article = false

	$: lang = $page.data.meta?.lang ?? 'lv'
</script>

<svelte:head>
	<Native {title} {description} url={$canonical} />
	<OpenGraph {title} {description} {article} {lang} url={$canonical} />
	<Twitter />
</svelte:head>
