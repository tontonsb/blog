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

**Note:** for a side to side comparison of classic and Karatsuba algorithms you can
view [this](/karatsuba/comparison) page. The display length will somewhat
reflect the overhead in Karatsuba's algorithm.

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
multiplications. But here's how Karatsuba's algorithm would perform. The
display starts with calculating `z0`, `z1` and `z2` and using them to get the
final result. The multiplications invloved in `z0`, `z1` and `z2`are detailed
below. You can click on the orange expressions to highlight their
multiplication and scroll to it. Depending on values and the selected cutoff it
will either be computed using the classic multiplication or use another step
of Karatsuba's algorithm.

<section>
<Karatsuba {x} {y} {cutoff} />
</section>

<style lang="scss">
label {
	display: block;
}

section {
	:global(pre) {
		// Fixes line number clipping
		overflow-x: visible;
	}

	:global(a) {
		// To bring it in line with the other content of <pre>
		font-family: unset;
		font-weight: unset;
	}

	:global(:target) {
		background: var(--color-light);
	}

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
