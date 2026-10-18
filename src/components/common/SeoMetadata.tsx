import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import {
	DASHBOARD_PAGE_PATH,
	getLanguageFromPath,
	getPageFromPath,
	PAGE_PATHS,
	type Language,
	type PublicPage,
} from '@constants/routes';

const seoByPage: Record<PublicPage, { titleKey: string; descriptionKey: string }> = {
	home: { titleKey: 'browserTabs.browserTabDefault', descriptionKey: 'seoDescriptions.home' },
	services: {
		titleKey: 'browserTabs.browserTabServices',
		descriptionKey: 'seoDescriptions.services',
	},
	about: {
		titleKey: 'browserTabs.browserTabAboutMe',
		descriptionKey: 'seoDescriptions.about',
	},
	contact: {
		titleKey: 'browserTabs.browserTabContact',
		descriptionKey: 'seoDescriptions.contact',
	},
	questions: {
		titleKey: 'browserTabs.browserTabQuestionsPublic',
		descriptionKey: 'seoDescriptions.questions',
	},
	legal: {
		titleKey: 'browserTabs.browserTabLegal',
		descriptionKey: 'seoDescriptions.legal',
	},
};

const dashboardSeo = {
	titleKey: 'browserTabs.browserTabDashboard',
	descriptionKey: 'seoDescriptions.dashboard',
};

const notFoundSeo = {
	titleKey: 'browserTabs.browserTabPageNotFound',
	descriptionKey: 'seoDescriptions.notFound',
};

const openGraphLocaleByLanguage: Record<Language, string> = {
	es: 'es_ES',
	en: 'en_US',
	ru: 'ru_RU',
};

const getOrCreateLink = (selector: string, rel: string) => {
	let link = document.querySelector<HTMLLinkElement>(selector);

	if (!link) {
		link = document.createElement('link');
		link.rel = rel;
		document.head.appendChild(link);
	}

	return link;
};

const getOrCreateMeta = (selector: string, attribute: string, value: string) => {
	let meta = document.querySelector<HTMLMetaElement>(selector);

	if (!meta) {
		meta = document.createElement('meta');
		meta.setAttribute(attribute, value);
		document.head.appendChild(meta);
	}

	return meta;
};

const SeoMetadata = () => {
	const { pathname } = useLocation();
	const { t, i18n } = useTranslation();

	useEffect(() => {
		const normalizedPath = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
		const language = getLanguageFromPath(normalizedPath);
		const page = getPageFromPath(normalizedPath);
		const seo = page
			? seoByPage[page]
			: normalizedPath === DASHBOARD_PAGE_PATH
				? dashboardSeo
				: notFoundSeo;
		const title = t(seo.titleKey);
		const description = t(seo.descriptionKey);
		const canonicalUrl = new URL(normalizedPath, window.location.origin).toString();
		const canonicalLink = getOrCreateLink('link[rel="canonical"]', 'canonical');
		const openGraphUrl = getOrCreateMeta('meta[property="og:url"]', 'property', 'og:url');

		canonicalLink.href = canonicalUrl;
		openGraphUrl.content = canonicalUrl;
		document.documentElement.lang = language;
		document.title = title;
		getOrCreateMeta('meta[name="description"]', 'name', 'description').content = description;
		getOrCreateMeta('meta[property="og:title"]', 'property', 'og:title').content = title;
		getOrCreateMeta('meta[property="og:description"]', 'property', 'og:description').content =
			description;
		getOrCreateMeta('meta[property="og:locale"]', 'property', 'og:locale').content =
			openGraphLocaleByLanguage[language];
		getOrCreateMeta('meta[name="twitter:title"]', 'name', 'twitter:title').content = title;
		getOrCreateMeta('meta[name="twitter:description"]', 'name', 'twitter:description').content =
			description;

		document.querySelectorAll<HTMLLinkElement>('link[rel="alternate"]').forEach((link) => {
			link.remove();
		});

		if (page) {
			(Object.keys(PAGE_PATHS) as Language[]).forEach((alternateLanguage) => {
				const alternate = document.createElement('link');
				alternate.rel = 'alternate';
				alternate.hreflang = alternateLanguage;
				alternate.href = new URL(
					PAGE_PATHS[alternateLanguage][page],
					window.location.origin
				).toString();
				document.head.appendChild(alternate);
			});

			const defaultAlternate = document.createElement('link');
			defaultAlternate.rel = 'alternate';
			defaultAlternate.hreflang = 'x-default';
			defaultAlternate.href = new URL(PAGE_PATHS.es[page], window.location.origin).toString();
			document.head.appendChild(defaultAlternate);
		}
	}, [i18n.language, pathname, t]);

	return null;
};

export default SeoMetadata;
