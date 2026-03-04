import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Modal from 'react-modal';
import { Provider as StoreProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App.tsx';

import ScrollToHash from '@components/common/ScrollToHash.tsx';
import i18nInit from '@localization/index';
import store from '@store/index';

i18nInit();

// Bind modal to the root element for accessibility
Modal.setAppElement('#root');

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
