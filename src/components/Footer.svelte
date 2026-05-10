<script>
	import Github from '@lucide/svelte/icons/github'
	import Twitter from '@lucide/svelte/icons/twitter'
	import { montserrat300Loaded } from '$lib/fonts'
	import { slide } from 'svelte/transition'
	import { quartIn } from 'svelte/easing'
	import { t } from '$lib/translations.js'
</script>

{#if $montserrat300Loaded}
<footer
	in:slide={{ delay: 400, duration: 300, easing: quartIn }}
	style:opacity={'prerendering' == $montserrat300Loaded ? '0' : null }
>
	<div>
		<a href="https://github.com/tontonsb" title="Github profile">
			<Github size="{24}" />
			tontonsb
		</a>

		<span>
			<!-- Discord icon from Tabler Icons (MIT) https://tabler.io/icons/icon/brand-discord -->
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-label="Discord">
				<path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
				<path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
				<path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3" />
				<path d="M7 16.5c3.5 1 6.5 1 10 0" />
			</svg>
			tontonsb
		</span>

		<a href="https://twitter.com/tontonsb" title="Twitter profile">
			<Twitter size="{24}" />
			tontonsb
		</a>
	</div>

	<div>
		<a href="/privacy">{$t.footer.privacy}</a>

		<a href="https://github.com/tontonsb/blog">
			{$t.footer.source}
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

	a, span {
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
