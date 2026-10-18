import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as StoreProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App.tsx';

import ScrollToHash from '@components/common/ScrollToHash.tsx';
import i18nInit from '@localization/index';
import store from '@store/index';

import '@fontsource-variable/inter';
import '@fontsource-variable/space-grotesk';
import './index.css';

const renderApp = async () => {
	await i18nInit();

	createRoot(document.getElementById('root')!).render(
		<StrictMode>
			<StoreProvider store={store}>
				<BrowserRouter>
					<ScrollToHash />
					<Suspense fallback={null}>
						<App />
					</Suspense>
				</BrowserRouter>
			</StoreProvider>
		</StrictMode>
	);
};

void renderApp().catch((error: unknown) => {
	console.error('Application initialization failed', error);
});
