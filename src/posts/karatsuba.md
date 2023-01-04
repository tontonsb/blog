---
title: Karatsuba's algorithm
date: 
intro: Let's take a look at an algorithm that multiplies two numbers faster than you could by mutiplying them digit by digit
lang: en
---

<script>
import {Karatsuba, Classic} from '@tontonsb/karatsuba-display'

// Best example numbers will have leading zeros at the start of the second
// half. Numbers should be 6 digits long, the description relies on that.
const x = 416001
const y = 719028
const cutoff = 10000

const xString = x.toString()
const yString = y.toString()

const splitPos = Math.floor(Math.min(xString.length, yString.length) / 2)

const xSplit = split(xString, splitPos)
const ySplit = split(yString, splitPos)

function split(str, position) {
	return {
		upper: str.substring(0, str.length - position),
		lower: str.substring(position),
	}
}
</script>

# Karatsuba's algorithm

This is how you multiply faster than possible.

To multiply two n-digit numbers, you have to do n^2 single digit
multiplications. That's obvious — you have to multiply each digit of one
numba to each digit of the other one. There's no way around it. When this
factoid was mentioned by [Andrei Kolomogorov](https://en.wikipedia.org/wiki/Andrey_Kolmogorov)
in a seminar in 1960, it set off a mental avalanche in one of the students.

This student was named [Anatoly Karatsuba](https://en.wikipedia.org/wiki/Anatoly_Karatsuba)
and he managed to find a way to multiply numbers faster than it is possible.
Well, that's exaggeration. But he found the first algorithm to multiply numbers
faster then multiplying them digit-by-digit thus opening the gates for 
algorithm development and improvements in an area that everyone until then had
considered done and solved.

## The algo

So what did Tolly do?

## Example

Let's multiply {x} by {y}. We will fall back to the classic multiplication
algorithm for numbers below {cutoff}.

We split {x} into {xSplit.upper} and {xSplit.lower}; and {y} into
{ySplit.upper} and {ySplit.lower}. We will also drop the leading zeros right
away turning {xSplit.lower} and {ySplit.lower} into {parseInt(xSplit.lower)}
and {parseInt(ySplit.lower)} respectively.

You can see the counter for individual multiplications on the left hand side.

<section>
<Karatsuba {x} {y} {cutoff} />
</section>

This multiplication took only 20 steps because we simplified some of the
numbers with leading zeros. If we hadn't done this step and just done
multiplications with all the digits of {xSplit.lower}, we'd have done nine
single-digit multiplications in each of the sub-steps and need to do 27
multiplications in total. In the worst case we might've also gotten two 4-digit
numbers in the `z1` calculation which would've required 16 instead of 9
multiplications, bringing the total 34.

Thus, even with these simplifications taken away, we can observe a slight edge
as the classic digit-by-digit multiplication would've required to do 36
multiplications.

## Otter algos

O(n^2) — what does it mean? And what can we do now?

<style lang="scss">
section {
	counter-reset: karatsuba-line;
	background: #f8f8fc;

	:global(.comment) {
		color: #727272;
	}

	:global(.counter:before) {
		border-right: 1px solid #ddd;
		padding: 0 .5em;
		margin-right: .5em;
		color: #727272;
	}
}
</style>
