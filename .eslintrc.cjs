module.exports = {
	root: true,
	extends: ['eslint:recommended', 'plugin:svelte/recommended'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2021
	},
	rules: {
		'no-unused-vars': ['error', { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }],
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	}
};
