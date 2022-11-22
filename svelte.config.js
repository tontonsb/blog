import adapter from '@sveltejs/adapter-auto'
import sveltePreprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			'$style': 'src/style',
			'$components': 'src/components',
		},
	},
	preprocess: [
		sveltePreprocess(),
	],
}

export default config
