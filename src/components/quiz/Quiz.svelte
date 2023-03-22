<script>
	import {setContext} from 'svelte'

	let questions = []
	const add = (answered, correct) => questions = [...questions, {answered, correct}]
	setContext('registerQuestion', add)
</script>

<slot />

Jautājumi: {questions.length}
