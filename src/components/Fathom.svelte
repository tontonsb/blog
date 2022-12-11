<script>
	// https://mattjennings.io/blog/how-to-use-fathom-analytics-with-sveltekit

	import { onMount } from 'svelte'
	import { browser } from '$app/environment'
	import { page } from '$app/stores'
	import * as Fathom from 'fathom-client'

	onMount(() => {
		Fathom.load('PYECSWWP')
	})

	$: $page.url.pathname, browser && Fathom.trackPageview()
</script>
