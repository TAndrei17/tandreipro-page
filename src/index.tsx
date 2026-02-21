import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as StoreProvider } from 'react-redux';
import { BrowserRouter } from 'react-router';

import './index.css';
import App from './App.tsx';

import ScrollToHash from '@components/common/ScrollToHash.tsx';
import i18nInit from '@localization/index';
import store from '@store/index';

i18nInit();

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<StoreProvider store={store}>
			<BrowserRouter>
				<ScrollToHash />
				<App />
			</BrowserRouter>
		</StoreProvider>
	</StrictMode>
);
