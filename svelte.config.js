import adapter from '@sveltejs/adapter-static'
import { mdsvex } from 'mdsvex'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
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
		prerender: {
			entries: [
				'*',
				'/en',
				'/lv',
				'/lv/about',
			],
			handleHttpError: 'warn',
		},
	},
	extensions: ['.svelte', '.md'],
	preprocess: [
		sveltePreprocess(),
		mdsvex({
			extensions: ['.md'],
			remarkPlugins: [
			],
			rehypePlugins: [
				rehypeSlug,
				rehypeAutolinkHeadings,
			],
		}),
	],
}

export default config
