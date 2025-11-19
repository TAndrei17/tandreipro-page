import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import resources from './resources';

const i18n = i18next.createInstance();

const i18nInit = async () => {
	const options = {
		debug: true,
		LogLevel: 'error',
		resources,
		lng: 'ru',
		fallbackLng: 'ru',
		interpolation: {
			escapeValue: false,
		},
	};

	await i18n.use(initReactI18next).init(options);
};

export default i18nInit;
