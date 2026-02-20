import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { Provider as StoreProvider } from 'react-redux';

import './index.css';
import App from './App.tsx';
import ScrollToHash from '@components/common/ScrollToHash.tsx';
import store from '@store/index';
import i18nInit from '@localization/index';

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
