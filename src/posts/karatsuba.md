---
title: Karatsuba's algorithm
date: 
intro: Let's take a look at an algorithm that multiplies two numbers faster than you could by mutiplying them digit by digit
lang: en
---

<script>
import {Karatsuba, Classic} from '@tontonsb/karatsuba-display'
import Katex from '$components/Katex.svelte'

import {randomInteger} from '$lib/helpers.js'

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

const equations = {
	classicNumerical: String.raw`
		26 \cdot 43 = (2b+6)(4b+3) = 2b \cdot 4b + 2b \cdot 3 + 6 \cdot 4b + 6 \cdot 3
	`,
	classic: String.raw`
		\begin{align*}
		xy & = (x_1 b + x_0)(y_1 b + y_0) \\
			& = x_1 b \cdot y_1 b + x_1 b \cdot y_0 + x_0 \cdot y_1 b + x_0 \cdot y_0 \\
			& = x_1 y_1 b^2 + x_1 y_0 b + x_0 y_1 b + x_0 y_0
		\end{align*}
	`,
	z1: String.raw`
		x_1 y_0 + x_0 y_1 = (x_1 + x_0) (y_1 + y_0) - x_1 y_1 - x_0 y_0
	`,
	z1example: String.raw`
		2 \cdot 3 + 6 \cdot 4 = (2 + 6) (3 + 4) - 2 \cdot 4 - 6 \cdot 3
	`,
	z: String.raw`
		\begin{align*}
		z_2 &= x_1 y_1 \\
		z_0 &= x_0 y_0 \\
		z_1 &= (x_1 + x_0) (y_1 + y_0) - z_2 - z_0
		\end{align*}
	`,
	karatsuba: String.raw`
		xy = z_2 b^2 + z_1 b + z_0
	`,
	O_n2: String.raw`
		\mathcal{O} (n^2)
	`,
	O_nlogn: String.raw`
		\mathcal{O} (n \log n)
	`,
	O_loglog: String.raw`
		\mathcal{O} (n \log n \log \log n)
	`,
	Theta_log23: String.raw`
		\Theta(n^{\log_2 3})
	`,
	Theta_log35: String.raw`
		\Theta(n^{\log_3 5})
	`,
}
</script>

# Karatsuba's algorithm

This is how you multiply faster than possible.

To multiply two n-digit numbers, you have to do n^2 single digit
multiplications. That's obvious — you have to multiply each digit of one
numba to each digit of the other one. There's no way around it. When this
factoid was mentioned by Andrei Kolomogorov in a seminar in 1960, it set off a
mental avalanche in one of the students.

This student was named [Anatoly Karatsuba](https://en.wikipedia.org/wiki/Anatoly_Karatsuba)
and he managed to find a way to multiply numbers faster than it is possible.
Well, that's exaggeration. But he found the first algorithm to multiply numbers
faster then multiplying them digit-by-digit thus opening the gates for 
algorithm development and improvements in an area that everyone until then had
considered done and solved.

## The breakthrough

So what did Karatsuba noticed that no one else had?

Consider 26 and 43. To multiply them *classically* you would do the following:

<section>
<Classic x={26} y={43} />
</section>

That's four single-digit multiplications as the counter on the left shows.
This reduction can be expressed via the following formula where <Katex math="b=10" />:

<Katex math={equations.classicNumerical} displayMode />

OK, let's switch to something more abstract. Denote the first number by <Katex math="x" />
and its digits by <Katex math="x_1" /> and <Katex math="x_0" />. Similarly the
second number will be represented by <Katex math="y" /> and we obtain this:

<Katex math={equations.classic} displayMode />

What Karatsuba noticed about this simple expression was that coefficients with
the term <Katex math="b" /> can be expressed using one multiplication and the
other coefficients:

<Katex math={equations.z1} displayMode />

So we get this strange algorithm. First calculate <Katex math="2 \cdot 4" />
and <Katex math="6 \cdot 3" />. Then, instead of calculating <Katex math="2 \cdot 3" />
and <Katex math="6 \cdot 4" /> we multiply <Katex math="8 \cdot 7" /> and reuse
the previous results to get what we were missing:

<Katex math={equations.z1example} displayMode />

And that's the key. We did three multiplications instead of four.

## The algo

In practice this is used for large numbers. <Katex math="x_1" />
and <Katex math="x_0" /> will not actually be single digits, but the first half
and the second half digits of the numbers. And <Katex math="b" /> will be
whatever it takes to make <Katex math="x = x_1 b + x_0" /> work.
And <Katex math="y = y_1 b + y_0" />, of course.

With those definitions in mind, do three multiplications to calculate these three
numbers:

<Katex math={equations.z} displayMode />

And obtain the result:

<Katex math={equations.karatsuba} displayMode />

But wait! I forgot to mention that this algorithm should be used recursively.
If the numbers involved to calculate those z's above are large, you should
multiply them using the Karatsuba algorithm. That's where the real speedup
comes in play!

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

You can try out the same visualization with different numbers [here](/karatsuba).

## Other algos

The classic digit-by-digit algorithm requires <Katex math="n^2" />
multiplications. And some additions as well, but it be estimated to run
in <Katex math={equations.O_n2} />.

The number of operations (time complexity) of Karatsuba's algorithm can be
[estimated](https://en.wikipedia.org/wiki/Karatsuba_algorithm#Time_complexity_analysis)
to be <Katex math={equations.Theta_log23} /> (the big theta is a bit more
precise than the big o as it's also bounded from below).

As Karatsuba revealed that the <Katex math={equations.O_n2} /> multiplication
can be beaten, it opened a flood of other attempts.

Soon Andrei Toom proposed and Stephen Cook refined a variation where the numbers
would be split in more than 2 parts. Under this interpretation Karatsuba's
algorithm becomes *Toom-2*, splitting into three parts is referred to as
*Toom-3* (or sometimes just *Toom-Cook*) and so on. The complexity evaluation
is hard for arbitrary *Toom-k* algorithm, but *Toom-3* runs in <Katex math={equations.Theta_log35} />.

In 1971 Arnold Schönhage and Volker Strassen came up with an idea to multiply
integers by multiplying polynomials which can be sped up by then recently
popularized fast Fourier transforms. Their algorithm works in <Katex math={equations.O_loglog} />
and it was the fastest multiplication algorithm for large numbers until 2007.
They conjectured that multiplication can be done in <Katex math={equations.O_nlogn} />.

This bound was reached in 2019 by David Harvey and Joris van der Hoeven who
used multi-dimensional (1729-dimensional to be precise, what a taxicab
coincidence) FFTs. But it is still unknown whether <Katex math={equations.O_nlogn} />
is the best we can do.

It must also be noted that all of these algorithms have significant overhead
and the more complex algorithms are faster only for very large numbers. The
Karatsuba and Toom-Cook algorithms are used for numbers consisting of hundreds
or thousands of digits. The Schönhage–Strassen algorithm is usually used for
numbers that have at least tens of thousands of digits. And it is used for
billions of digits as well. The newer algorithms are so complex that they only
reach the asymptotic complexity for impractically large numbers and are not
used in any software, at least until futher polishing.

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
