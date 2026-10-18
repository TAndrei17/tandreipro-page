import { useEffect, useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Header from '@components/common/Header/Header';
import SeoMetadata from '@components/common/SeoMetadata';
import { getLanguageFromPath, getPageFromPath } from '@constants/routes';
import SettingsProvider from '@context/SettingsContext';
import { loadLanguageResources, loadServiceResources } from '@localization/index';
import AppRoutes from '@routes/AppRoutes';
import { startApp } from '@store/app/appSlice';
import { useAppDispatch, useAppSelector } from '@store/index';

const RouteLanguageSync = () => {
	const { pathname } = useLocation();
	const { i18n } = useTranslation();
	const routeLanguage = getLanguageFromPath(pathname);

	useLayoutEffect(() => {
		let isCurrent = true;

		const synchronizeLanguage = async () => {
			try {
				await loadLanguageResources(routeLanguage);
				if (getPageFromPath(pathname) === 'services') {
					await loadServiceResources(routeLanguage);
				}
				if (isCurrent && i18n.language !== routeLanguage) {
					await i18n.changeLanguage(routeLanguage);
				}
			} catch (error) {
				if (isCurrent) {
					console.error(`Failed to load ${routeLanguage} language resources`, error);
				}
			}
		};

		void synchronizeLanguage();
		return () => {
			isCurrent = false;
		};
	}, [i18n, routeLanguage]);

	return null;
};

function App() {
	const dispatch = useAppDispatch();
	const status = useAppSelector((state) => state.app.status);

	useEffect(() => {
		if (status === 'idle') {
			dispatch(startApp());
		}
	}, []);

	return (
		<SettingsProvider>
			<RouteLanguageSync />
			<SeoMetadata />
			<Header />
			<AppRoutes />
			<ToastContainer />
		</SettingsProvider>
	);
}

export default App;
