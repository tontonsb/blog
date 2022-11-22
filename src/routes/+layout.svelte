<script>
	import Header from '$components/header/Header.svelte'
	import Footer from '$components/Footer.svelte'
	import '$style/main.css'
</script>

<Header />

<main>
	<slot />
</main>

<Footer />
