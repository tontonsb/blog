<script>
	import { Github, Twitter } from 'lucide-svelte'
	import { montserrat300Loaded } from '$lib/fonts'
	import { slide } from 'svelte/transition'
	import { quartIn } from 'svelte/easing'
</script>

{#if $montserrat300Loaded}
<footer in:slide={{ delay: 400, duration: 300, easing: quartIn }} >
	<div>
		<a href="https://github.com/tontonsb" title="Github profile">
			<Github size="{24}" />
			tontonsb
		</a>

		<a href="https://twitter.com/tontonsb" title="Twitter profile">
			<Twitter size="{24}" />
			tontonsb
		</a>
	</div>

	<div>
		<a href="/privacy">Datu politika</a>

		<a href="https://github.com/tontonsb/blog">
			Izejas kods
		</a>
	</div>
</footer>
{/if}

<style lang="scss">
	footer {
		grid-column: viewport;
		margin-top: var(--space-base);

		padding: var(--space-sm) var(--space-base);
		display: flex;
		justify-content: space-between;

		font-size: var(--font-base);
		font-family: var(--font-alt);
		font-variant-caps: small-caps;
		letter-spacing: var(--letter-spacing);

		color: var(--color-dim);
		border-top: 1px solid var(--color-accent);
	}

	div {
		display: flex;
		gap: 1rem;

		@media (max-width: 34rem) {
			flex-direction: column;
		}
	}

	a {
		display: flex;
		gap: var(--space-sm);
		align-items: center;

		&:is(:hover, :focus) {
			color: var(--color-accent);

			& > :global(svg) {
				color: var(--color-light);
			}
		}
	}
</style>
