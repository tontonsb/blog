import adapter from '@sveltejs/adapter-static'
import { mdsvex } from 'mdsvex'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
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
			rehypePlugins: [
			  rehypeSlug,
			  rehypeAutolinkHeadings,
			],
		}),
	],
}

export default config
