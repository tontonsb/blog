export default async () => {
	const files = import.meta.glob('$posts/*.md')

	const posts = await Promise.all(
		Object.entries(files).map(async ([path, resolver]) => {
			const { metadata } = await resolver()

			return {
				meta: metadata,
				// /something/something/posts/mypost.md => /blog/mypost
				path: 'blog/' + path.split('/posts/')[1].slice(0, -3),
			}
		})
	)

	return posts.sort((a, b) =>
		a.meta.date < b.meta.date ? 1 : -1
	)
}
