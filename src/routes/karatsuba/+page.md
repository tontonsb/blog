<script>
	import {Karatsuba} from '@tontonsb/karatsuba-display'
	import {randomInteger} from '$lib/helpers'

	let x = randomInteger(1000000000000000, 10000000000000000)
	let y = randomInteger(1000000000000000, 10000000000000000)

	$: xLength = x.toString().length
	$: yLength = y.toString().length

	$: lengthText = xLength === yLength
		? `${xLength} digit numbers`
		: `${xLength} and ${yLength} numbers`

	let cutoff = 10000000
</script>

<svelte:head>
	<title>Karatsuba algorithm</title>
	<meta name="description" content="Karatsuba algorithm visualized.">
</svelte:head>

# Karatsuba algorithm

Play around with the calculator and see how many steps does it take for the
[Karatsuba algorithm](/blog/karatsuba) to multiply the selected numbers.

<label>
	x = <input bind:value={x} >
</label>
<label>
	y = <input bind:value={y} >
</label>
<label>
	Fall back to classic multiplication for values below <input bind:value={cutoff} >
</label>

For comparision multiplying these {lengthText} numbers with the classic
digit-by-digit algorithm would've required {xLength*yLength} single digit
multiplications. But here's how Karatsuba's algorithm would perform:

<section>
<Karatsuba {x} {y} {cutoff} />
</section>

<style lang="scss">
label {
	display: block;
}

section {
	counter-reset: karatsuba-line;

	:global(.comment) {
		color: #767676;
	}

	:global(.counter:before) {
		border-right: 1px solid #ddd;
		padding: 0 .5em;
		margin-right: .5em;
		color: #767676;
	}
}
</style>
