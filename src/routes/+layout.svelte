<script>
	import Lang from '$components/Lang.svelte'
	import MatomoKit from '$components/tracking/MatomoKit.svelte'
	import Header from '$components/header/Header.svelte'
	import Footer from '$components/Footer.svelte'
	import { page } from '$app/stores'

	import '$style/main.scss'
</script>

<Lang />

<MatomoKit
	baseUrl="https://matomo.glaive.pro"
	siteId="1" />

<Header />

<main lang={$page.data.meta?.lang ?? 'lv'}>
	<slot />
</main>

<Footer />
