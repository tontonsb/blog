<script>
	import Header from './Header.svelte'
	import Footer from './Footer.svelte'
	import '$style/main.css'
</script>

<Header />

<main>
	<slot />
</main>

<Footer />
