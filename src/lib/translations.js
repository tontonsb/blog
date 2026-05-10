import { derived } from 'svelte/store'
import { lang } from './lang.js'

const strings = {
	lv: {
		nav: {
			home: 'Sākums',
			articles: 'Raksti',
		},
		footer: {
			privacy: 'Datu politika',
			source: 'Izejas kods',
		},
		blog: {
			title: 'Raksti',
			description: 'Rakstu saraksts Džura blogā.',
			published: 'Publicēts',
		},
		home: {
			title: 'Nestandarta analīze',
		},
		privacy: {
			title: 'Datu politika',
			description: 'Džura datu apstrādes politika.',
		},
	},
	en: {
		nav: {
			home: 'Home',
			articles: 'Articles',
		},
		footer: {
			privacy: 'Privacy policy',
			source: 'Source code',
		},
		blog: {
			title: 'Articles',
			description: "Articles on Džuris's blog.",
			published: 'Published',
		},
		home: {
			title: 'Nonstandard analysis',
		},
		privacy: {
			title: 'Privacy policy',
			description: 'Data processing policy.',
		},
	},
}

export const t = derived(lang, $lang => $lang === 'en' ? strings.en : strings.lv)
