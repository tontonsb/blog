import fetchPosts from '$lib/posts.js'
import { json } from '@sveltejs/kit'

// Tbh I added this route because this tutorial used a similar solution.
// https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog
// There's probably a better solution.
export const GET = async () => {
	const posts = await fetchPosts()

	return json(posts)
}
