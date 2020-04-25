'use strict'

module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		sourceType: 'module',
		experimentalDecorators: true,
	},
	plugins: ['@typescript-eslint/eslint-plugin', 'typescript', 'graphql', 'simple-import-sort'],
	extends: [
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'prettier/@typescript-eslint',
		'./tslint-core.json',
	],
	root: true,
	env: {
		node: true,
		jest: true,
	},
}
