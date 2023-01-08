<script>
	import {Karatsuba, Classic} from '@tontonsb/karatsuba-display'
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
	<title>Karatsuba vs classic</title>
	<meta name="description" content="Karatsuba algorithm compared to the classic multiplication.">
</svelte:head>

# Karatsuba vs classic

Compare the [Karatsuba algorithm](/blog/karatsuba) to the classic digit-by-digit
multiplication. This page is intended to compare the lengths of both approaches.
If you are only interested in investigating the Karatsuba algorithm, head to a
more responsive page [here](/karatsuba).

**Note:** The responsivity on this page is not that polished, you might want to
zoom out in some cases.

<label>
	x = <input bind:value={x} >
</label>
<label>
	y = <input bind:value={y} >
</label>
<label>
	Fall back to classic multiplication for values below <input bind:value={cutoff} >
</label>

Side to side comparison is useful for estimating the total complexity. The
line counters track the number of single digit multiplications and you can
often observe that small cutoff values produce less multiplications in the
Karatsuba algorithm. But the total length of calculation also reflects the
number of other actions (recursion, calculating intermediate results) that
gets longer when decreasing the cutoff. This overhead is why the Karatsuba
algorithm is not that useful for small number multiplications.

<div>
<section>
<Classic {x} {y} />
</section>

<section>
<Karatsuba {x} {y} {cutoff} />
</section>
</div>

<style lang="scss">
label {
	display: block;
}

div {
	width: 90vw;
	position: relative;
	left: calc(50% - 45vw);

	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1rem;
	overflow: scroll;
}

section {
	background: #f8f8fc;

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
		padding: 0 .2em;
		margin-right: .5em;
		color: #767676;
	}
}
</style>
