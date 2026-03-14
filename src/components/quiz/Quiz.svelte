<script>
	import {setContext} from 'svelte'

	/**
	 * @template T
	 * @typedef {import('svelte/store').Writable<T>} Writable
	 */

	// List of quests, they will register themselves in teh list
	/** @type {{answered: Writable<boolean|null|undefined>, correct: Writable<boolean>}[]} */
	let questions = []
	const add = (
		/** @type {Writable<boolean|null|undefined>} */ answered,
		/** @type {Writable<boolean>} */ correct,
	) => questions = [...questions, {answered, correct}]
	setContext('registerQuestion', add)
</script>

<slot />

Jautājumi: {questions.length}
