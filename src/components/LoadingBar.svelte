<script>
	import { onMount } from 'svelte'
	let progress = 0
	let visible = false
	let stuck = false

	onMount(() => {
		function advance() {
			visible = true
			const remaining = 1 - progress

			progress += remaining/4

			if (remaining < 0.3)
				stuck = true

			if (remaining > 0.15)
				setTimeout(advance, 300 / remaining)
		}

		setTimeout(advance, 250)
	})
</script>

{#if visible}
	<div class="progress-container">
		<div
			class="progress"
			class:glow={stuck}
			style:inline-size="{progress * 100}%"
		/>
	</div>
{/if}

{#if progress >= 0.2}
	<div class="fade" />
{/if}

<style>
	.progress-container {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: var(--space-xs);
		z-index: 999;
	}

	.progress {
		height: 100%;
		background-color: var(--color-accent);
		transition: width 0.3s;
		box-shadow: 0px 0px 6px 0px var(--color-accent);
	}

	.glow {
		animation: glow 1.4s infinite linear;
	}

	@keyframes glow {
		0% {
			box-shadow: 3px 0px 2px 0px var(--color-accent);
		}
		20% {
			box-shadow: 6px 0px 4px 0px var(--color-accent);
		}
		45% {
			box-shadow: 10px 0px 8px 0px var(--color-accent);
		}
		70% {
			box-shadow: 20px 0px 12px 0px var(--color-accent);
		}
		100% {
			box-shadow: 20px 0px 12px 0px var(--color-light);
		}
	}

	.fade {
		position: fixed;
		width: 100%;
		height: 100%;
		background-color: rgba(255, 255, 255, 0.3);
		pointer-events: none;
		z-index: 998;
		animation: fade 0.4s;
	}

	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
