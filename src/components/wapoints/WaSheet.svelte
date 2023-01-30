<script>
import Counter from '$components/Counter.svelte'
import { WaCalculator } from '@glaivepro/wa-calculator'

const calc = new WaCalculator()

/** @type string|null */
let edition = '2017'

/** @type string|null */
let gender = 'm'

/** @type string|null */
let venueType = 'outdoor'

/** @type string|null */
let discipline = null

/** @type string[] */
let disciplines = []

// When edition, gender or venueType changes -> load the discipline list
$: edition, gender, venueType, setOptions(), getDisciplines()

// When anything changes -> load the new coefs
$: edition, gender, venueType, discipline, setOptions(), reload()

function setOptions() {
	calc.setOptions({edition, gender, venueType, discipline})
}

function getDisciplines() {
	disciplines = calc.getDisciplines()
}

/** @type Number|null */
let resultShift = null

/** @type Number|null */
let conversionFactor = null

/** @type Number|null */
let pointShift = null

function reload() {
	({resultShift, conversionFactor, pointShift} = calc.getCoefficients())
}

let rowCount = 10

/** @type Array<null|Number> */
let rows = Array(rowCount).fill(0)
$: rows.length < rowCount && (rows = [...rows, null])

/** @type Array<null|Number> */
$: results = rows.map(row =>
	calc.evaluateUsing(row, {resultShift, conversionFactor, pointShift}) || 0
)

function brrr() {
	if (Number.isNaN(rows[0]) || Number.isNaN(rows[1]))
		return alert('Write something in teh firstest 2 rows lol')

	for (let i = 2; i < rows.length; i++)
		rows[i] = (Math.round(200 * rows[i-1]) - Math.round(100 * rows[i-2])) / 100
}
</script>

<div class="row">
	<select bind:value={edition}>
		<option value={null}>Edition</option>
		{#each calc.getEditions() as ed}
			<option value={ed}>{ed}</option>
		{/each}
	</select>

	<select bind:value={gender}>
		<option value={null}>Gender</option>
		<option value="m">M</option>
		<option value="f">F</option>
	</select>

	<select bind:value={venueType}>
		<option value={null}>Venue type</option>
		<option value="outdoor">Outdoor</option>
		<option value="indoor">Indoor</option>
	</select>

	<select bind:value={discipline}>
		<option value={null}>Discipline</option>
		{#each disciplines as disc}
			<option value={disc}>{disc}</option>
		{/each}
	</select>
</div>

<div class=row>
	<label class=row>
		Result shift
		<input bind:value={resultShift} type=number />
	</label>
	<label class=row>
		Conversion factor
		<input bind:value={conversionFactor} type=number />
	</label>
	<label class=row>
		Point shift
		<input bind:value={pointShift} type=number />
	</label>
</div>

<div class=row>
	<div class=row>
		Row count
		<Counter
			bind:count={rowCount}
			min={1} />
	</div>

	<button on:click={reload}>Reset coefs for this discipline</button>
</div>

<button on:click={brrr}>Brrr the numbers pls</button>

<table>
	<thead>
		<tr>
			<th>Performance</th>
			<th>Points</th>
		</tr>
	</thead>
	{#each rows as row, i}
		<tr>
			<td><input bind:value={row} type=number></td>
			<td><output>{results[i]}</output></td>
		</tr>
	{/each}
</table>

Results in seconds (track), meters (field) or points (combined)!

<style lang=scss>
	.row {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-sm);
		align-items: center;
		justify-content: space-around;
	}

	input {
		width: 5rem;
	}
</style>
