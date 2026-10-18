import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import resourceLoaders from './resources';

import { getLanguageFromPath } from '@constants/routes';
import type { Language } from '@constants/routes';

const DEFAULT_LANG = 'es';

const getInitialLang = () =>
	typeof window === 'undefined' ? DEFAULT_LANG : getLanguageFromPath(window.location.pathname);

const i18n = i18next.createInstance();
const serviceResourcePromises = new Map<Language, Promise<void>>();

export const loadLanguageResources = async (language: Language) => {
	if (i18n.hasResourceBundle(language, 'translation')) return;

	const resources = await resourceLoaders[language]();
	i18n.addResourceBundle(language, 'translation', resources.translation, true, true);
};

export const loadServiceResources = (language: Language) => {
	const existingPromise = serviceResourcePromises.get(language);
	if (existingPromise) return existingPromise;

	const resourcePromise = (async () => {
		await loadLanguageResources(language);

		const {
			maintenanceContentEn,
			maintenanceContentEs,
			maintenanceContentRu,
			mobileContentEn,
			mobileContentEs,
			mobileContentRu,
			shopsContentEn,
			shopsContentEs,
			shopsContentRu,
			websitesContentEn,
			websitesContentEs,
			websitesContentRu,
		} = await import('@assets/articles/websites');

		const serviceContentByLanguage = {
			en: {
				webContent: websitesContentEn,
				shopContent: shopsContentEn,
				mobileContent: mobileContentEn,
				maintenanceContent: maintenanceContentEn,
			},
			es: {
				webContent: websitesContentEs,
				shopContent: shopsContentEs,
				mobileContent: mobileContentEs,
				maintenanceContent: maintenanceContentEs,
			},
			ru: {
				webContent: websitesContentRu,
				shopContent: shopsContentRu,
				mobileContent: mobileContentRu,
				maintenanceContent: maintenanceContentRu,
			},
		};

		i18n.addResourceBundle(
			language,
			'translation',
			{ services: serviceContentByLanguage[language] },
			true,
			true
		);
	})();

	serviceResourcePromises.set(language, resourcePromise);
	void resourcePromise.catch(() => serviceResourcePromises.delete(language));
	return resourcePromise;
};

const i18nInit = async () => {
	const initialLanguage = getInitialLang();
	const fallbackResources = await resourceLoaders[DEFAULT_LANG]();
	const initialResources =
		initialLanguage === DEFAULT_LANG ? fallbackResources : await resourceLoaders[initialLanguage]();

	const options = {
		debug: true,
		LogLevel: 'error',
		resources:
			initialLanguage === DEFAULT_LANG
				? { [DEFAULT_LANG]: fallbackResources }
				: {
						[DEFAULT_LANG]: fallbackResources,
						[initialLanguage]: initialResources,
					},
		lng: initialLanguage,
		fallbackLng: DEFAULT_LANG,
		interpolation: {
			escapeValue: false,
		},
	};

	await i18n.use(initReactI18next).init(options);
};

export default i18nInit;
