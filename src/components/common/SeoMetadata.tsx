import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import {
	ABOUT_PAGE_PATH,
	CONTACT_PAGE_PATH,
	DASHBOARD_PAGE_PATH,
	LEGAL_PAGE_PATH,
	QUESTIONS_PAGE_PATH,
	SERVICES_PAGE_PATH,
} from '@constants/routes';

const seoByPath = {
	'/': { titleKey: 'browserTabs.browserTabDefault', descriptionKey: 'seoDescriptions.home' },
	[SERVICES_PAGE_PATH]: {
		titleKey: 'browserTabs.browserTabServices',
		descriptionKey: 'seoDescriptions.services',
	},
	[ABOUT_PAGE_PATH]: {
		titleKey: 'browserTabs.browserTabAboutMe',
		descriptionKey: 'seoDescriptions.about',
	},
	[CONTACT_PAGE_PATH]: {
		titleKey: 'browserTabs.browserTabContact',
		descriptionKey: 'seoDescriptions.contact',
	},
	[QUESTIONS_PAGE_PATH]: {
		titleKey: 'browserTabs.browserTabQuestionsPublic',
		descriptionKey: 'seoDescriptions.questions',
	},
	[LEGAL_PAGE_PATH]: {
		titleKey: 'browserTabs.browserTabLegal',
		descriptionKey: 'seoDescriptions.legal',
	},
	[DASHBOARD_PAGE_PATH]: {
		titleKey: 'browserTabs.browserTabDashboard',
		descriptionKey: 'seoDescriptions.dashboard',
	},
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
		const seo = seoByPath[normalizedPath as keyof typeof seoByPath] ?? {
			titleKey: 'browserTabs.browserTabPageNotFound',
			descriptionKey: 'seoDescriptions.notFound',
		};
		const title = t(seo.titleKey);
		const description = t(seo.descriptionKey);
		const canonicalUrl = new URL(pathname, window.location.origin).toString();
		const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
		const openGraphUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');

		if (canonicalLink) {
			canonicalLink.href = canonicalUrl;
		}

		if (openGraphUrl) {
			openGraphUrl.content = canonicalUrl;
		}

		document.title = title;
		getOrCreateMeta('meta[name="description"]', 'name', 'description').content = description;
		getOrCreateMeta('meta[property="og:title"]', 'property', 'og:title').content = title;
		getOrCreateMeta('meta[property="og:description"]', 'property', 'og:description').content =
			description;

		document.querySelectorAll<HTMLLinkElement>('link[rel="alternate"]').forEach((link) => {
			link.href = canonicalUrl;
		});
	}, [i18n.language, pathname, t]);

	return null;
};

export default SeoMetadata;
