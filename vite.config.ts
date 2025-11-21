import path from 'path';
import { fileURLToPath } from 'url';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@components': path.resolve(__dirname, './src/components'),
			'@constants': path.resolve(__dirname, './src/constants'),
			'@localization': path.resolve(__dirname, './src/localization'),
			'@routes': path.resolve(__dirname, './src/routes'),
			'@utils': path.resolve(__dirname, './src/utils'),
		},
	},
});
