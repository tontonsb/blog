<script>
	import { page } from '$app/stores';
</script>

<header>
	<div class="brand">
		<a href="/">
			Džuris
		</a>
	</div>

	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/blog') ? 'page' : undefined}>
				<a href="/blog">Blog</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		grid-column: viewport;
		margin-top: var(--space-sm);
		height: var(--space-xl);

		display: flex;
		justify-content: space-between;

		font-size: var(--font-lg);
		line-height: 1.1;

		font-family: var(--font-alt);
		font-weight: var(--font-light);
		color: var(--color-dim);

		box-shadow: 0 0.2rem 0.6rem -0.4rem var(--color-light);
	}

	.brand {
		display: flex;
		gap: 1rem;

		color: var(--color-accent);
		font-weight: var(--font-strong);
		text-transform: uppercase;
	}

	.brand img {
		width: 1.5em;
		height: 1.5em;
		object-fit: contain;
	}

	nav {
		display: flex;
		align-items: center;
	}

	ul {
		position: relative;
		height: 100%;
		display: flex;
		list-style: none;
	}

	li {
		position: relative;
		height: 100%;
	}

	a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		letter-spacing: 0.07em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	li::before {
		--size: 9px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		transition: border-color 0.2s linear;
		border-top: var(--size) solid transparent;
	}

	li[aria-current='page']::before {
		border-top: var(--size) solid var(--color-accent);
	}

	li:not([aria-current='page']):is(:hover, :focus-within)::before {
		border-top: var(--size) solid var(--color-light);
	}
</style>
