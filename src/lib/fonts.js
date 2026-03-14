import { readable } from 'svelte/store'
import { browser } from '$app/environment'
import FontFaceObserver from 'fontfaceobserver'

/**
 * @template T
 * @typedef {import('svelte/store').Readable<T>} Readable
 */

// Make sure that these letters are loaded on the font
const key = 'BESbwyāžŠ'

/**
 * @param {string} name
 * @param {number} weight
 * @param {import('svelte/store').Subscriber<string|boolean>} setter
 */
function loadFont(name, weight, setter) {
	// FontFaceObserver relies on window being present
	if (!browser) {
		// During prerendering we have to show the contents to the crawler
		setter('prerendering')

		return
	}


	new FontFaceObserver(name, {weight})
		.load(key)
		.then(
			() => setter('loaded'), // If loaded, we say it's ok
			() => setter('rejected') // If rejected or failed, continue anyway; will use fallback fonts
		).catch(() => setter('failed'))
}

/** @type {Readable<string|boolean>} */
export const firaSans300Loaded = readable(/** @type {string|boolean} */ (false), set => loadFont('Fira Sans', 300, set))

/** @type {Readable<string|boolean>} */
export const montserrat300Loaded = readable(/** @type {string|boolean} */ (false), set => loadFont('Montserrat', 300, set))

/** @type {Readable<string|boolean>} */
export const montserrat400Loaded = readable(/** @type {string|boolean} */ (false), set => loadFont('Montserrat', 400, set))

/** @type {Readable<string|boolean>} */
export const montserrat500Loaded = readable(/** @type {string|boolean} */ (false), set => loadFont('Montserrat', 500, set))
