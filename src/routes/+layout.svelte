<script>
	import Header from '$components/header/Header.svelte'
	import Footer from '$components/Footer.svelte'
	import Matomo from '$components/Matomo.svelte'
	import Fathom from '$components/Fathom.svelte'

	import '$style/main.scss'
</script>

<Matomo />
<Fathom />

<Header />

<main>
	<slot />
</main>

<Footer />
