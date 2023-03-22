<script>
	import {getContext} from 'svelte'
	import {writable} from 'svelte/store'

	export let correct = false

	const id = Symbol()
	let selected = writable(false)

	// Announce that this answer exists
	const register = getContext('registerAnswer')
	register(id, selected, correct)

	// The `selected` state is manipulated via parent as it has to deselect the otter answos
	const select = getContext('selectAnswer')
</script>

<li>
	<button on:click={() => select(id)} >
		<slot />
		{$selected ? 'Y' : 'N'}
	</button>
</li>
