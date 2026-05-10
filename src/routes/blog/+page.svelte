<script>
	import Meta from '$components/meta/Meta.svelte'
	import { lang } from '$lib/lang.js'
	import { t } from '$lib/translations.js'

	/** @type {import('./$types').PageData} */
	export let data
</script>

<Meta title={$t.blog.title} description={$t.blog.description} />

<h1>{$t.blog.title}</h1>

{#each data.posts as post}
<section>
	<h2>
		<a href={post.path}>
			{post.meta.title}
		</a>
		{#if post.meta.lang}
		<span class="lang-badge">{post.meta.lang.toUpperCase()}</span>
		{/if}
	</h2>
	{#if post.meta.intro}
	<p>
		{post.meta.intro}
	</p>
	{/if}
	<small>{$t.blog.published} {post.meta.date}</small>
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

	.lang-badge {
		font-size: var(--font-sm);
		font-family: var(--font-alt);
		font-weight: var(--font-normal);
		letter-spacing: var(--letter-spacing);
		color: var(--color-dim);
		vertical-align: middle;
	}
</style>
