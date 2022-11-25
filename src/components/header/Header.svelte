<script>
	import { page } from '$app/stores'
	import Hamburger from './Hamburger.svelte'

	let open = false
</script>

<header>
	<div class="brand">
		<a href="/">
			∂²𝑧
		</a>
	</div>

	<nav class:open>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/" on:click={() => open = false}>Sākums</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/blog') ? 'page' : undefined}>
				<a href="/blog" on:click={() => open = false}>Raksti</a>
			</li>
			<!--
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about" on:click={() => open = false}>Par</a>
			</li>
			-->
		</ul>
	</nav>

	<Hamburger bind:open />
</header>

<style lang="scss">
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

	nav {
		display: flex;
		align-items: center;
	}

	@media (max-width: 35rem) {
		nav {
			position: absolute;
			top: calc(var(--space-sm) + var(--space-xl));
			width: 100%;

			flex-direction: column;
			max-height: 0;
			overflow: hidden;

			background: white;
			box-shadow: 0 0.2rem 0.6rem -0.4rem var(--color-light);
			transition: max-height .1s cubic-bezier(.77, 0, .175, 1);

			&.open {
				max-height: 200px;
				transition: max-height .25s cubic-bezier(.77, 0, .175, 1);
			}
		}

		ul {
			flex-direction: column;
			align-items: center;
			gap: var(--space-sm);
		}

		li {
			padding: var(--space-base);
		}
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
		height: 100%;

		padding: 0 0.5rem;
		display: flex;
		align-items: center;

		letter-spacing: 0.07em;

		text-decoration: none;
		transition: color 0.2s linear;
	}

	li::before {
		--size: 9px;

		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		width: 0;
		height: 0;

		content: '';

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
