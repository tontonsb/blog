<script>
	import {getContext} from 'svelte'
	import {writable} from 'svelte/store'

	export let correct = false

	const selected = writable(false)

	const register = getContext('registerAnswer')
	register(selected, correct)
</script>

<slot />
