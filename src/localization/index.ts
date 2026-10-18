import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import resources from './resources';

import { getLanguageFromPath } from '@constants/routes';

const DEFAULT_LANG = 'es';

const getInitialLang = () =>
	typeof window === 'undefined' ? DEFAULT_LANG : getLanguageFromPath(window.location.pathname);

const i18n = i18next.createInstance();

const i18nInit = async () => {
	const options = {
		debug: true,
		LogLevel: 'error',
		resources,
		lng: getInitialLang(),
		fallbackLng: DEFAULT_LANG,
		interpolation: {
			escapeValue: false,
		},
	};

	await i18n.use(initReactI18next).init(options);
};

export default i18nInit;
