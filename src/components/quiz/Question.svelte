<script>
	import {setContext, getContext} from 'svelte'
	import {writable} from 'svelte/store'

	export let text = ''

	const answered = writable(false)
	const correct = writable(null)

	// Announce to parent that this question exists
	const register = getContext('registerQuestion')
	register(answered, correct)

	// The list of answers, we'll let each answer add itself to it.
	// We want to maintain it to be able to deselect the other answers.
	let answers = writable([])
	const add = (id, selected, correct) => $answers = [...$answers, {id, selected, correct}]
	setContext('registerAnswer', add)

	// id of currently selected answers
	let selected = null
	const select = id => {
		$answers.forEach(a => a.selected.set(a.id === id))
		selected = id
	}
	setContext('selectAnswer', select)

	// Current answo and related stāte
	$: answer = $answers.find(a => a.id === selected)
	$: $correct = answer?.correct
	$: $answered = !!answer
</script>

{text}

<ul>
	<slot/>
</ul>

{$correct ? 'CORRECT' : 'WRONG'}
{$answered ? 'ansrt' : 'notan'}
