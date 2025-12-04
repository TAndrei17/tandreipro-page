import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import resources from './resources';

const SUPPORTED_LANGS = new Set(['es', 'en', 'ru']);
const DEFAULT_LANG = 'es';

const getInitialLang = (): string => {
	const userLang = localStorage.getItem('userLang');
	const systemLang = navigator.language.slice(0, 2);

	if (userLang && SUPPORTED_LANGS.has(userLang)) {
		return userLang;
	}
	if (SUPPORTED_LANGS.has(systemLang)) {
		return systemLang;
	}
	return DEFAULT_LANG;
};

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
