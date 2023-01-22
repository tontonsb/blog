<script>
	import MatomoKit from '$components/tracking/MatomoKit.svelte'
	import Header from '$components/header/Header.svelte'
	import Footer from '$components/Footer.svelte'
	import LoadingBar from '$components/LoadingBar.svelte'
	import { page, navigating } from '$app/stores'

	$: loading = $navigating && $navigating.to

	import '$style/main.scss'
</script>

<MatomoKit
	baseUrl="https://matomo.glaive.pro"
	siteId="1" />

{#if loading}
	<LoadingBar />
{/if}

<Header />

<main
	lang={$page.data.meta?.lang ?? 'lv'}
	aria-busy={loading ? 'true' : null}
	>
	<slot />
</main>

<Footer />
