// https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog
import { error } from '@sveltejs/kit'

/** @type {import('./$types').PageLoad} */
export const load = async ({params}) => {
	try {
		const post = await import(`../../../posts/${params.slug}.md`)

		return {
			Content: post.default,
			meta: post.metadata,
			slug: params.slug,
		}
	} catch(err) {
		throw error(404, 'Posts nav rasts.')
	}
}
