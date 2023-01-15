<script>
	import { lang, init } from '$lib/lang.js'
	import { page } from '$app/stores'

	init($page)
</script>

<svelte:head>
	<base href="/{$lang ?? ''}/">
</svelte:head>
