<script>
	import Meta from '$components/meta/Meta.svelte'

	// TODO: define Post type somewhere
	/** @type {import('./$types').PageData} */
	export let data
</script>

<Meta title="Raksti" description="Rakstu saraksts Džura blogā." />

<h1>Raksti</h1>

{#each data.posts as post}
<section>
	<h2>
		<a href={post.path}>
			{post.meta.title}
		</a>
	</h2>
	{#if post.meta.intro}
	<p>
		{post.meta.intro}
	</p>
	{/if}
	<small>Publicēts {post.meta.date}</small>
</section>
{/each}

<style lang=scss>
	a {
		color: var(--color-accent);
		// font-variant-caps: small-caps;
		letter-spacing: var(--letter-spacing);
		color: var(--color-accent);
		font-family: var(--font-alt);
		font-weight: var(--text-normal);

		&:is(:hover, :focus, :active) {
			color: var(--color-dim);
		}
	}

	section + section {
		margin-top: var(--space-base);
	}
</style>
