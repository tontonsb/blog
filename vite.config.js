import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	build: {
		reportCompressedSize: false, // Improves build speed a lot
	},
};

export default config;
