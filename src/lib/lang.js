import { writable } from 'svelte/store'
import { browser } from '$app/environment'

const initial = browser ? (localStorage.getItem('lang') ?? 'lv') : 'lv'
export const lang = writable(initial)

if (browser) {
	let initialized = false
	lang.subscribe(v => {
		if (initialized) localStorage.setItem('lang', v)
		else initialized = true
	})
}
