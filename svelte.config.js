import adapter from '@sveltejs/adapter-auto'
import { mdsvex } from 'mdsvex'
import sveltePreprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			'$components': 'src/components',
			'$lib': 'src/lib',
			'$posts': 'src/posts',
			'$style': 'src/style',
		},
	},
	extensions: ['.svelte', '.md'],
	preprocess: [
		sveltePreprocess(),
		mdsvex({
			extensions: ['.md'],
		}),
	],
}

export default config
