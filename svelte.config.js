import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			'$style': 'src/style',
			'$components': 'src/components',
		}
	}
};

export default config;
