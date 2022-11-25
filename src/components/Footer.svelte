<script>
	import { Github, Twitter } from 'lucide-svelte'
</script>

<footer>
	<div>
		<a href="https://github.com/tontonsb" target="_blank" rel="noreferrer" title="Github profile">
			<Github size="{24}" />
			tontonsb
		</a>

		<a href="https://twitter.com/tontonsb" target="_blank" rel="noreferrer" title="Twitter profile">
			<Twitter size="{24}" />
			tontonsb
		</a>
	</div>

	<div>
		<a href="/privacy">Datu politika</a>

		<a href="https://github.com/tontonsb/blog" target="_blank" rel="noreferrer">
			Izejas kods
		</a>
	</div>
</footer>

<style lang="scss">
	footer {
		grid-column: viewport;
		margin-top: var(--space-base);

		padding: var(--space-sm) var(--space-base);
		display: flex;
		justify-content: space-between;

		font-size: var(--font-base);
		font-family: var(--font-alt);
		font-weight: var(--font-light);

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

		color: var(--color-dim);

		&:is(:hover, :focus) {
			color: var(--color-accent);

			& > :global(svg) {
				color: var(--color-light);
			}
		}
	}
</style>
