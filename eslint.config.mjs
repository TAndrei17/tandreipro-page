import pluginJs from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import pluginReact from 'eslint-plugin-react';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';

import config from './prettier.config.mjs';

export default [
	// General file settings
	{
		files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
		ignores: ['dist', 'node_modules', 'src/assets'],
	},

	// Environment settings
	{
		languageOptions: {
			globals: globals.browser,
		},
	},

	// Base JS/React rules
	pluginJs.configs.recommended,
	pluginReact.configs.flat.recommended,
	reactRefresh.configs.vite,

	// TypeScript
	{
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			parser: tsParser,
			parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
		},
		plugins: { '@typescript-eslint': tsPlugin },
		rules: {
			'@typescript-eslint/no-unused-vars': 'error',
			'@typescript-eslint/no-require-imports': 'off',
		},
	},

	// Import and Prettier
	{
		plugins: { import: importPlugin, prettier: prettierPlugin },
		rules: {
			'react/react-in-jsx-scope': 'off',
			'import/resolver': {
				typescript: {
					project: './tsconfig.json',
				},
			},
			'import/order': [
				'error',
				{
					'newlines-between': 'always',
					alphabetize: { order: 'asc', caseInsensitive: true },
				},
			],
			'prettier/prettier': ['error', config],
		},
		settings: {
			react: {
				version: 'detect', // automatically detects the installed React version
			},
		},
	},
];
