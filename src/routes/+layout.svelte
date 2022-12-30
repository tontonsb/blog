<script>
	import MatomoKit from '$components/tracking/MatomoKit.svelte'
	import Header from '$components/header/Header.svelte'
	import Footer from '$components/Footer.svelte'

	import '$style/main.scss'
</script>

<MatomoKit
	baseUrl="https://matomo.glaive.pro"
	siteId="1" />

<Header />

<main>
	<slot />
</main>

<Footer />
