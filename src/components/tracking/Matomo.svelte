<script context="module">
	import { browser } from '$app/environment'

	/**
	 * @param {string[]} args
	*/
	export const push = args => {
		if (!browser)
			return

		if (!('_paq' in window))
			window._paq = []

		window._paq.push(args)
	}
</script>

<script>
	import { onMount } from 'svelte'

	/** @type string */
	export let baseUrl

	/** @type string */
	export let siteId = '1'

	// Initialize Matomo setup
	push(['setTrackerUrl', baseUrl + '/matomo.php'])
	push(['setSiteId', siteId])
	push(['disableCookies'])

	// This will force matomo.js to load only after we've prepared the inital _paq
	let initialized = false
	onMount(() => initialized = true)
</script>

<svelte:head>
	{#if initialized}
		<script
			defer
			async
			src={baseUrl + '/matomo.js'}
		></script>
	{/if}
</svelte:head>
