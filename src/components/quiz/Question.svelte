<script>
	import {setContext, getContext} from 'svelte'
	import {writable} from 'svelte/store'

	export let text = ''

	const answered = writable(false)
	const correct = writable(null)

	const register = getContext('registerQuestion')
	register(answered, correct)

	let answers = []
	const add = (selected, correct) => answers = [...answers, {selected, correct}]
	setContext('registerAnswer', add)
</script>

{text}

<slot/>
