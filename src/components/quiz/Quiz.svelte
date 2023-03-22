<script>
	import {setContext} from 'svelte'

	// List of quests, they will register themselves in teh list
	let questions = []
	const add = (answered, correct) => questions = [...questions, {answered, correct}]
	setContext('registerQuestion', add)
</script>

<slot />

Jautājumi: {questions.length}
