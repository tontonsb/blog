
<script>
	export let count = 0
	/** @type number? */
	export let min = null
	/** @type number|null */
	export let max = null

	const increment = () => {
		count++

		if (max != null && count > max)
			count = max
	}

	const decrement = () => {
		count--

		if (min != null && count < min)
			count = min
	}
</script>

<span class="container">
	<button on:click={decrement}>-</button>
	<span class="count">{count}</span>
	<button on:click={increment}>+</button>
</span>

<style lang=scss>
	.container {
		height: var(--space-lg);
		width: calc(3 * var(--space-lg));

		display: grid;
		grid-template-columns: auto 1fr auto;
		align-items: center;

		background: var(--color-accent);
		font-size: var(--font-base);
	}

	.count {
		text-align: center;
		background: white;
	}

	button {
		width: var(--space-lg);
		font-size: var(--font-lg);

		color: white;
		border: none;
		background: none;
		cursor: pointer;
	}
</style>
