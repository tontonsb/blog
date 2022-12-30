<script>
	import Matomo, {push} from './Matomo.svelte'
	import { browser } from '$app/environment'
	import { page } from '$app/stores'

	/** @type string */
	export let baseUrl

	/** @type string */
	export let siteId = '1'

	// Track the last page for the next referrer
	/** @type string|null */
	let referrer = null

	/**
	 * @param {string} path
	 */
	const trackView = path => {
		// See https://developer.matomo.org/guides/spa-tracking for details
		if (referrer)
			push(['setReferrerUrl', referrer])

		referrer = path

		push(['setCustomUrl', path])
		push(['setDocumentTitle', document.title])

		push(['trackPageView'])
	}

	// Track any new page
	$: browser && trackView($page.url.pathname)
</script>

<Matomo
	{baseUrl}
	{siteId} />
