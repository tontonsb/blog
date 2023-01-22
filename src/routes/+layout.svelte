<script>
	import { page, navigating } from '$app/stores'
	import Footer from '$components/Footer.svelte'
	import Header from '$components/header/Header.svelte'
	import LoadingBar from '$components/LoadingBar.svelte'
	import MatomoKit from '$components/tracking/MatomoKit.svelte'
	import { RingLoader } from 'svelte-loading-spinners'

	import { firaSans300Loaded, montserrat400Loaded, montserrat500Loaded } from '$lib/fonts.js'

	$: fontsReady = $firaSans300Loaded && $montserrat400Loaded && $montserrat500Loaded

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
	style:opacity={'prerendering' === fontsReady ? '0' : null}
	>
	<slot />
	{#if !fontsReady || 'prerendering' === fontsReady}
	<div class="spinner">
		<RingLoader size="90" color="var(--color-accent)" unit="px" duration="2s" />
	</div>
	{/if}
</main>

<Footer />

<style>
main {
	position: relative;
}

.spinner {
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: .6rem;

	display: grid;
	place-items: center;

	background: #ffffffdd;
}
</style>
