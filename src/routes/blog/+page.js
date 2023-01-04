/** @type {import('./$types').PageLoad} */
export const load = async ({ fetch }) => {
	const response = await fetch(`/blog/posts`)

	/** @type {{
	 * 		meta: {
	 * 			title: string|null,
	 * 			date: string|null,
	 * 			intro: string|null,
	 * 			lang: string|null,
	 * 		},
	 * 		path: string,
	 * }[]}
	 */
	const posts = await response.json()

	return {
		posts: posts.filter(p => p.meta.date)
	}
}
