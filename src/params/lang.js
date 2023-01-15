import {localisation} from '$lib/config.js'

/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(param) {
	return localisation.languages.includes(param)
}
