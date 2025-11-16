/** @type {import('prettier').Config} */

const config = {
	printWidth: 100,
	tabWidth: 2,
	useTabs: true,
	singleQuote: true,
	bracketSameLine: true,
	trailingComma: 'es5',

	// Recommended for Vite + React projects
	semi: true,
	jsxSingleQuote: false,
	arrowParens: 'always',
};

export default config;
