<script>
	import Counter from '$components/Counter.svelte'
	import Katex from '$components/Katex.svelte'

	export let editable = false // Changing numbers
	export let configurable = false // Changing participants and positions
	export let totals = true // showing totals and ranks

	export let positionCount = 3
	export let participantCount = 3

	/** @type string[] */
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

	/** @type {((x: number) => number)[]} */
	export let positionToPrice = [
		x => x,
		x => x,
		x => x,
	]

	/** @type {string[]} */
	export let positionToPriceLabel = [
		'P',
		'P',
		'P',
	]

	/** @type string[] */
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
	$: positionToPrice.length < positionCount && (positionToPrice = [...positionToPrice, x => x])
	$: positionToPriceLabel.length < positionCount && (positionToPriceLabel = [...positionToPriceLabel, 'P'])
	$: matrix.length < positionCount && (matrix = [...matrix, matrix[matrix.length - 1]])

	$: participants.length < participantCount && (participants = [...participants, 'Dalībnieks j'])
	$: matrix[0].length < participantCount && (matrix = matrix.map(row => [...row, 100]))

	// Points = weight * price / bestPrice
	$: priceMatrix = matrix.map((row, i) => row.map(price => positionToPrice[i](Number(price))))

	// Total points = sum over that participant (column)
	// Maybe transpose in the prev step (priceMatrix)?
	$: results = priceMatrix.slice(0, positionCount).reduce((totals, row) => {
		row.slice(0, participantCount).forEach((points, j) => {
			totals[j] ??= 0

			totals[j] += points
		})

		return totals
	}, [])
	$: ranks = results.map(result => 1 + results.filter(r => r < result).length)
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
				{#each positions.slice(0, positionCount) as _, i}
				<!-- using contenteditable because sizing inputs in td is hard -->
				<th
					contenteditable=true
					role=textbox
					aria-label={(i+1).toString() + '. pozīcijas nosaukums'}
					bind:textContent={positions[i]}></th>
				{/each}
			{:else}
				{#each positions.slice(0, positionCount) as position}
				<th>{position}</th>
				{/each}
			{/if}
		</tr>
		<tr>
			<td>Aprēķins</td>
			{#if configurable}
				{#each positionToPriceLabel.slice(0, positionCount) as label, i}
				<td
					contenteditable=true
					role=textbox
					aria-label={'Pozīcijas ' + positions[i] + ' svars'}
					class:invalid={!/^\d*(\.\d*)?$/.test(positionToPriceLabel.toString())}
					bind:textContent={positionToPriceLabel[i]}></td>
				{/each}
				<td colspan=2 class=hint>
					← skaitļi un nosaukumi ir labojami
				</td>
			{:else}
				{#each positionToPriceLabel.slice(0, positionCount) as label}
				<td><Katex math={label} /></td>
				{/each}
			{/if}
		</tr>
		<tr>
			<th>Dalībnieks</th>
			<th colspan={positionCount}>Piedāvājumi</th>
		</tr>
		{#each participants.slice(0, participantCount) as participant, j}
		<tr>
			{#if configurable}
				<td
					contenteditable=true
					role=textbox
					aria-label={(j+1).toString() + '. dalībnieka nosaukums'}
					bind:textContent={participants[j]}></td>
			{:else}
				<td>{participant}</td>
			{/if}
			{#if editable}
				{#each positions.slice(0, positionCount) as position, i}
				<td
					contenteditable=true
					role=textbox
					aria-label={'Dalībnieka ' + participants[j] + ' piedāvājums pozīcijā ' + position}
					class:invalid={!/^[1-9]\d*(\.\d+)?$/s.test(matrix[i][j].toString())}
					bind:textContent={matrix[i][j]}
				></td>
				{/each}
				{#if !j && !configurable}
				<td colspan=2 class=hint>
					← skaitļi tabulā ir labojami
				</td>
				{/if}
			{:else}
				{#each positions.slice(0, positionCount) as _, i}
				<td>{matrix[i][j]}</td>
				{/each}
			{/if}
		</tr>
		{/each}
	<tbody aria-live=polite>
		<tr>
			<th></th>
			<th colspan={positionCount}>Novērtējums ekvivalentajās izmaksās</th>
			{#if totals}
			<th>Kopā</th>
			<th>Vieta</th>
			{/if}
		</tr>
		{#each participants.slice(0, participantCount) as participant, j}
		<tr>
			<td>{participant}</td>
			{#each priceMatrix.slice(0, positionCount) as points}
			<td>{points[j]}</td>
			{/each}
			{#if totals}
			<td>{results[j]}</td>
			<td class:winner={1 === ranks[j]}>{ranks[j]}</td>
			{/if}
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

	:where(th, td)[contenteditable] {
		box-shadow: inset 0 0 3px grey;
	}

	td.hint {
		background: var(--color-accent);
		color: white;
	}

	.winner {
		color: var(--color-accent);
	}
</style>
