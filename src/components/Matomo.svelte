<script>
	import { page } from '$app/stores'
	import { browser } from '$app/environment'

	// https://gitlab.com/dexterlabs/dexlib/-/blob/master/packages/svelte-matomo/src/index.svelte
	const url = 'https://matomo.glaive.pro'
	const siteId = '1'

	const scriptUrl = url + '/matomo.js'
	const trackUrl = url + '/matomo.php'

	let matomo
	let queue = []

	$: tracker = matomo ? matomo.getTracker(trackUrl, siteId) : null

	function add() {
		if (!browser)
			return

		queue = [...queue, {
			title: document.title,
			path: $page.url.pathname,
		}]
	}

	function send() {
		if (!tracker)
			return

		const view = queue[0]

		if (!view)
			return

		tracker.disableCookies()
		tracker.setCustomUrl(view.path)
		tracker.setDocumentTitle(view.title)
		tracker.trackPageView()

		queue = [...queue.slice(1)]
	}

	$: $page.url.pathname, add()

	// When tracker is active and anything is on the queue -- work!
	$: if(tracker && queue.length) send()
</script>

<svelte:head>
	<script
		defer
		async
		src={scriptUrl}
		on:load={() => matomo = window.Matomo}
	></script>
</svelte:head>
