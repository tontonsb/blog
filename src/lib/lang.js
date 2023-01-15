import { localisation } from '$lib/config'
import { writable } from 'svelte/store'

/** @type {import('svelte/store').Writable<undefined|string>} */
export const lang = writable(undefined)

/**
 * @param {import('@sveltejs/kit').Page} page
 */
export function init(page) {
	lang.set(localisation.default)
}
