<script>
	import Counter from '$components/Counter.svelte'

	export let editable = false // Changing numbers
	export let configurable = false // Changing participants and positions

	export let positionCount = 3
	export let participantCount = 3

	export let positions = [
		'Analīze',
		'Izstrāde',
		'Uzstādīšana',
		'Testēšana',
		'Uzturēšana',
		'Apmācības',
		'Konsultācijas',
		'Atjaunināšana',
	]

	export let weights = [20,20,20,20,20]

	export let participants = [
		'AS Lāga zeļļi',
		'SIA Brāķis & co',
		'IK Uzmetiens',
		'SIA Bezatbilde',
		'Z/S Laksti C',
	]

	// Array of offered prices. matrix[i][j] corresponds to j's offer in i.
	export let matrix = [
		[100, 100, 80],
		[200, 200, 200],
		[100, 100, 100],
		[100, 100, 100],
		[100, 100, 100],
	]

	// Allow indefinite extension
	$: positions.length < positionCount && (positions = [...positions, 'Pozīcija i'])
	$: weights.length < positionCount && (weights = [...weights, 20])
	$: matrix.length < positionCount && (matrix = [...matrix, matrix[matrix.length - 1]])

	$: participants.length < participantCount && (participants = [...participants, 'Dalībnieks j'])
	$: matrix[0].length < participantCount && (matrix = matrix.map(row => [...row, 100]))

	// Best offer = minimum in that position (row)
	$: best = matrix.map(row => Math.min(...row.slice(0, participantCount)))

	// Points = weight * price / bestPrice
	$: pointMatrix = matrix.map((row, i) => row.map(price => weights[i]*best[i]/price))

	// Total points = sum over that participant (column)
	// Maybe transpose in the prev step (pointMatrix)?
	$: results = pointMatrix.slice(0, positionCount).reduce((totals, row) => {
		row.slice(0, participantCount).forEach((points, j) => {
			totals[j] ??= 0

			totals[j] += points
		})

		return totals
	}, [])
	$: ranks = results.map(result => 1 + results.filter(r => r > result).length)
</script>

{#if configurable}
<div class=row>
	<div class=row>
		Pozīciju skaits
		<Counter
			bind:count={positionCount}
			min={1} />
	</div>
	<div class=row>
		Dalībnieku skaits
		<Counter
			bind:count={participantCount}
			min={1} />
	</div>
</div>
{/if}

<div class=container>
	<table>
		<tr>
			<th></th>
			{#if configurable}
				{#each positions.slice(0, positionCount) as position, i}
				<!-- using contenteditable because sizing inputs in td is hard -->
				<th
					contenteditable=true
					role=textbox
					bind:textContent={positions[i]}></th>
				{/each}
			{:else}
				{#each positions.slice(0, positionCount) as position}
				<th>{position}</th>
				{/each}
			{/if}
		</tr>
		<tr>
			<td>Svars (max punkti)</td>
			{#if configurable}
				{#each weights.slice(0, positionCount) as weight, i}
				<td
					contenteditable=true
					role=textbox
					class:invalid={!/^\d*(\.\d*)?$/.test(weight.toString())}
					bind:textContent={weights[i]}></td>
				{/each}
			{:else}
				{#each weights.slice(0, positionCount) as weight}
				<td>{weight}</td>
				{/each}
			{/if}
		</tr>
		<tr>
			<th>Dalībnieks</th>
			<th colspan={positionCount}>Piedāvātās cenas</th>
		</tr>
		{#each participants.slice(0, participantCount) as participant, j}
		<tr>
			{#if configurable}
				<td
					contenteditable=true
					role=textbox
					bind:textContent={participants[j]}></td>
			{:else}
				<td>{participant}</td>
			{/if}
			{#if editable}
				{#each positions.slice(0, positionCount) as position, i}
				<td
					contenteditable=true
					role=textbox
					class:invalid={!/^[1-9]\d*(\.\d+)?$/s.test(matrix[i][j].toString())}
					bind:textContent={matrix[i][j]}
				></td>
				{/each}
			{:else}
				{#each positions.slice(0, positionCount) as position, i}
				<td>{matrix[i][j]}</td>
				{/each}
			{/if}
		</tr>
		{/each}
		<tr class=totals aria-live=polite>
			<td>Zemākā cena</td>
			{#each best.slice(0, positionCount) as price}
			<td>{price}</td>
			{/each}
		</tr>
	<tbody aria-live=polite>
		<tr>
			<th></th>
			<th colspan={positionCount}>Saņemtie punkti</th>
			<th>Kopā</th>
			<th>Vieta</th>
		</tr>
		{#each participants.slice(0, participantCount) as participant, j}
		<tr>
			<td>{participant}</td>
			{#each pointMatrix.slice(0, positionCount) as points}
			<td>{points[j].toFixed(2)}</td>
			{/each}
			<td>{results[j].toFixed(2)}</td>
			<td class:winner={1 === ranks[j]}>{ranks[j]}</td>
		</tr>
		{/each}
	</table>
</div>

<style lang=scss>
	.row {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-sm);
		align-items: center;
		justify-content: space-around;
	}

	.container {
		margin-bottom: var(--space-base);
		overflow-x: auto;
	}

	table {
		margin-top: var(--space-base);
		border-collapse: collapse;
	}

	th,td {
		padding: var(--space-xs) var(--space-sm);
		white-space: nowrap;
	}

	th {
		padding-top: var(--space-base);

		font-family: var(--font-alt);
		font-weight: var(--font-strong);

		border-bottom: var(--border-light) solid var(--color-light);

		&:first-child {
			text-align: left;
		}
	}

	td {
		&:not(:first-child) {
			text-align: center;
		}

		&.invalid {
			background: var(--color-light);
		}
	}

	.totals {
		border-top: var(--border-light) solid var(--color-light);
	}

	.winner {
		color: var(--color-accent);
	}
</style>
