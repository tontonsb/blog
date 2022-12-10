<script>
	// source:
	// https://svelte.dev/repl/49ff6c089825418888cf804d9dde77bc?version=3.54.0

	import katex from 'katex'
	/** @type string */
	export let math
	/** @type boolean */
	export let displayMode = false

	const options = {
		displayMode: displayMode,
		throwOnError: false
	}

	$: katexString = katex.renderToString(math, options)
</script>

<svelte:head>
	<!-- Use https://www.srihash.org/ when updating -->
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.min.css"
		integrity="sha384-vKruj+a13U8yHIkAyGgK1J3ArTLzrFGBbBc0tDp4ad/EyewESeXE/Iv67Aj8gKZ0"
		crossorigin="anonymous" >
</svelte:head>

{@html katexString}
