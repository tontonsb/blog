export const load = async ({ fetch }) => {
	const response = await fetch(`/blog/posts`)
	const posts = await response.json()

	return {posts}
}
