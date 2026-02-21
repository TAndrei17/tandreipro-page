import pluginJs from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import pluginReact from 'eslint-plugin-react';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';

import prettierConfig from './prettier.config.mjs';

export default [
	// Общие настройки
	{
		ignores: ['dist/**', 'node_modules/**', 'src/assets/**'],
	},
	{
		files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
	},

	{
		languageOptions: {
			globals: globals.browser,
		},
	},

	// Базовые правила JS / React
	pluginJs.configs.recommended,
	pluginReact.configs.flat.recommended,
	reactRefresh.configs.vite,

	// TypeScript — React приложение (src)
	{
		files: ['src/**/*.{ts,tsx}'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				project: './tsconfig.app.json',
				tsconfigRootDir: import.meta.dirname,
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
		},
		plugins: {
			'@typescript-eslint': tsPlugin,
		},
		rules: {
			// обязательно для TS
			'no-undef': 'off',

			'@typescript-eslint/no-unused-vars': 'error',
			'@typescript-eslint/no-require-imports': 'off',
		},
	},

	// TypeScript — Node / Vite
	{
		files: ['vite.config.ts'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				project: './tsconfig.node.json',
				tsconfigRootDir: import.meta.dirname,
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
		},
		plugins: {
			'@typescript-eslint': tsPlugin,
		},
		rules: {
			'no-undef': 'off',
		},
	},

	// Import / Prettier / React settings
	{
		plugins: {
			import: importPlugin,
			prettier: prettierPlugin,
		},
		settings: {
			react: {
				version: 'detect',
			},
			'import/resolver': {
				typescript: {
					project: './tsconfig.app.json',
				},
			},
		},
		rules: {
			// React
			'react/react-in-jsx-scope': 'off',

			// Imports
			'import/order': [
				'error',
				{
					'newlines-between': 'always',
					alphabetize: {
						order: 'asc',
						caseInsensitive: true,
					},
				},
			],

			// Prettier
			'prettier/prettier': ['error', prettierConfig],
		},
	},
];
