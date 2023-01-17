import { localisation } from '$lib/config'
import { lang } from '$lib/lang.js'
import { page } from '$app/stores'
import { derived, get } from 'svelte/store'

export const current = derived(page, p => p.url.href)

const localize = (origin, lang, path = null) => {
	let url = origin + '/' + lang

	if (path)
		url += '/' + path

	return url
}

export const localized = (url, lang) => {
	// console.log(url,lang)
	if (!url)
		return ''

	const origin = get(page).url.origin
	// console.log({origin})

	const path = url?.substring(origin.length)

	// If no path, just add lang
	if (0 === path.length)
		return localize(origin, lang)

	// If path is exactly 3 chars, it might be /lv or /en
	if (3 === path.length) {
		if (localisation.languages.includes(path.substring(1)))
			return localize(origin, lang)
	}

	// If path is 4+ chars, it might've started with /lv/ or /en/
	if (4 <= path.length) {
		if ('/' === path.charAt(3) && localisation.languages.includes(path.substring(1,3))) {
			return localize(origin, lang, path.substring(4))
		}
	}

	// Anything else -> just localize passing the path without the leading slash
	return localize(origin, lang, path.substring(1))
}

export const canonical = derived([current, lang], ([c, l]) => localized(c, l))
