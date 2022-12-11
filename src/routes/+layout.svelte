<script>
	import Header from '$components/header/Header.svelte'
	import Footer from '$components/Footer.svelte'
	import Matomo from '$components/Matomo.svelte'

	import '$style/main.scss'
</script>

<Matomo />

<Header />

<main>
	<slot />
</main>

<Footer />
