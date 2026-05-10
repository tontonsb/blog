import { writable } from 'svelte/store'
import { browser } from '$app/environment'

const initial = browser ? (localStorage.getItem('lang') ?? 'lv') : 'lv'
export const lang = writable(initial)

if (browser) {
	lang.subscribe(v => localStorage.setItem('lang', v))
}
