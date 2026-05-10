<script>
	import { onMount } from 'svelte'

	/**
	 * @typedef {{ name: string, area: number, highest: { name: string | null, elevation: number | null } | null }} Country
	 */

	let dataset = 'countries'
	let yScale = 'linear'
	/** @type {Set<string>} */
	let disabled = new Set()
	/** @type {HTMLDivElement | undefined} */
	let plotEl
	/** @type {any} */
	let Plotly
	/** @type {Country[]} */
	let countries
	/** @type {Country[]} */
	let all
	let initialized = false

	onMount(async () => {
		;[{ default: Plotly }, countries, all] = await Promise.all([
			import('plotly.js-dist-min'),
			fetch('/data/skylines/countries.json').then(r => r.json()),
			fetch('/data/skylines/countries-and-dependencies.json').then(r => r.json()),
		])

		if (!plotEl) return

		await Plotly.newPlot(plotEl, ...buildPlot())

		const plotlyEl = /** @type {any} */ (plotEl)
		plotlyEl.on('plotly_click', (/** @type {{ points: Array<{ customdata: string }> }} */ { points }) => {
			const name = points[0]?.customdata
			if (!name)
				return

			disabled.has(name) ? disabled.delete(name) : disabled.add(name)
			Plotly.react(plotEl, ...buildPlot())
		})

		initialized = true
	})

	function update() {
		if (initialized)
			Plotly.react(plotEl, ...buildPlot())
	}

	/** @param {Country} c */
	function getElevation(c) {
		return c.highest?.elevation ?? null
	}

	/**
	 * @param {Country[]} entries
	 * @param {boolean} findMax
	 */
	function paretoFront(entries, findMax) {
		const sorted = [...entries].sort((a, b) => findMax ? a.area - b.area : b.area - a.area)
		let bound = findMax ? -Infinity : Infinity
		return sorted.filter(c => {
			const highestPeak = getElevation(c)

			if (highestPeak == null)
				return false

			if (findMax ? highestPeak > bound : highestPeak < bound) {
				bound = highestPeak
				return true
			}

			return false
		})
	}

	function buildPlot() {
		const source = (dataset === 'countries' ? countries : all)
			.filter(c => {
				const highestPeak = getElevation(c)

				return c.area > 0 && highestPeak != null && (yScale !== 'log' || highestPeak > 0)
			})

		const active = source.filter(c => !disabled.has(c.name))
		const disabledEntries = source.filter(c => disabled.has(c.name))

		const skylineSet = new Set(paretoFront(active, true).map(c => c.name))
		const reflectionSet = new Set(paretoFront(active, false).map(c => c.name))

		const skyline = active.filter(c => skylineSet.has(c.name)).sort((a, b) => a.area - b.area)
		const reflection = active.filter(c => reflectionSet.has(c.name) && !skylineSet.has(c.name)).sort((a, b) => a.area - b.area)
		const regular = active.filter(c => !skylineSet.has(c.name) && !reflectionSet.has(c.name))

		/** @param {Country} c */
		const hover = c => {
			const e = getElevation(c)
			const areaFmt = c.area < 10 ? c.area : Math.round(c.area).toLocaleString()
			return `<b>${c.name}</b><br>Area: ${areaFmt} km²<br>Highest point: ${e} m${c.highest?.name ? `<br>${c.highest?.name}` : ''}`
		}

		/**
		 * @param {Country[]} entries
		 * @param {string} name
		 * @param {string} color
		 * @param {boolean} showLine
		 * @param {number} [size]
		 */
		const trace = (entries, name, color, showLine, size = 8) => ({
			x: entries.map(c => c.area),
			y: entries.map(c => getElevation(c)),
			mode: showLine ? 'markers+lines' : 'markers',
			type: 'scatter',
			name,
			customdata: entries.map(c => c.name),
			text: entries.map(hover),
			hoverinfo: 'text',
			marker: { color, size },
			...(showLine && { line: { color, width: 1.5 } }),
		})

		const layout = {
			paper_bgcolor: 'transparent',
			plot_bgcolor: '#f5f4f0',
			xaxis: { title: { text: 'Area (km²)' }, type: 'log', gridcolor: '#e0deda' },
			yaxis: { title: { text: 'Highest elevation (m)' }, type: yScale, gridcolor: '#e0deda' },
			margin: { t: 20, r: 20, b: 60, l: 70 },
			legend: { orientation: 'h', y: -0.2 },
			hovermode: 'closest',
			font: { family: 'system-ui, sans-serif', size: 12 },
		}

		return [
			[
				trace(regular, 'Countries', '#5dd9b8', false),
				trace(skyline, 'Skyline front', '#f2a56b', true, 9),
				trace(reflection, 'Reflection front', '#f26f5a', true, 9),
				trace(disabledEntries, 'Excluded', '#aaaaaa', false),
			],
			layout,
			{ responsive: true, displayModeBar: false },
		]
	}
</script>

<div class=controls>
	<div>
		<label>
			<input
				type=radio
				name=dataset
				bind:group={dataset}
				value=countries
				on:change={update}>
			Countries
		</label>
		<label>
			<input
				type=radio
				name=dataset
				bind:group={dataset}
				value=all
				on:change={update}>
			Countries &amp; territories
		</label>
	</div>
	<div>
		Height scale:
		<label>
			<input
				type=radio
				name=yscale
				bind:group={yScale}
				value=linear
				on:change={update}>
			Linear
		</label>
		<label>
			<input
				type=radio
				name=yscale
				bind:group={yScale}
				value=log
				on:change={update}>
			Logarithmic
		</label>
	</div>
</div>

<div class=plot bind:this={plotEl}></div>

<p class=hint>Click a point to exclude or restore it from the envelope calculation.</p>

<style>
	.controls {
		display: flex;
		gap: 1.5rem;
		flex-wrap: wrap;
		margin: 0.75rem 0 0.5rem;
		font-size: 0.875rem;
	}

	.controls label {
		cursor: pointer;
		margin-right: 0.5rem;
	}

	.plot {
		height: 520px;
	}

	.hint {
		font-size: 0.8rem;
		color: #999;
		margin-top: 0.25rem;
	}
</style>
