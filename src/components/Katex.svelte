<script>
	// source:
	// https://svelte.dev/repl/49ff6c089825418888cf804d9dde77bc?version=3.54.0

	import katex from 'katex'
	import 'katex/dist/katex.min.css'

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

{@html katexString}
