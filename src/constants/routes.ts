export type Language = 'es' | 'en' | 'ru';
export type PublicPage = 'home' | 'services' | 'about' | 'contact' | 'questions' | 'legal';

export const PAGE_PATHS: Record<Language, Record<PublicPage, string>> = {
	es: {
		home: '/',
		services: '/desarrollo-web-aplicaciones',
		about: '/sobre-mi',
		contact: '/contacto',
		questions: '/preguntas',
		legal: '/aviso-legal',
	},
	en: {
		home: '/en',
		services: '/en/web-application-development',
		about: '/en/about-me',
		contact: '/en/contact',
		questions: '/en/questions',
		legal: '/en/legal-notice',
	},
	ru: {
		home: '/ru',
		services: '/ru/razrabotka-veb-prilozheniy',
		about: '/ru/o-sebe',
		contact: '/ru/kontakt',
		questions: '/ru/voprosy',
		legal: '/ru/pravovoe-uvedomlenie',
	},
};

export const SERVICES_PAGE_PATH = PAGE_PATHS.es.services;
export const ABOUT_PAGE_PATH = PAGE_PATHS.es.about;
export const CONTACT_PAGE_PATH = PAGE_PATHS.es.contact;
export const QUESTIONS_PAGE_PATH = PAGE_PATHS.es.questions;
export const LEGAL_PAGE_PATH = PAGE_PATHS.es.legal;
export const DASHBOARD_PAGE_PATH = '/dashboard';

export const LEGACY_SERVICES_PAGE_PATH = '/desarrollo-web-y-apps';
export const LEGACY_ABOUT_PAGE_PATH = '/about';
export const LEGACY_CONTACT_PAGE_PATH = '/contact';
export const LEGACY_QUESTIONS_PAGE_PATH = '/questionsPublic';
export const LEGACY_LEGAL_PAGE_PATH = '/legal';

export const getLanguageFromPath = (pathname: string): Language => {
	const prefix = pathname.split('/')[1];
	return prefix === 'en' || prefix === 'ru' ? prefix : 'es';
};

const normalizePath = (pathname: string) =>
	pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;

export const getPageFromPath = (pathname: string): PublicPage | undefined => {
	const normalizedPath = normalizePath(pathname);

	for (const language of Object.keys(PAGE_PATHS) as Language[]) {
		const page = (Object.keys(PAGE_PATHS[language]) as PublicPage[]).find(
			(pageName) => PAGE_PATHS[language][pageName] === normalizedPath
		);
		if (page) return page;
	}

	return undefined;
};

export const getLocalizedPagePath = (page: PublicPage, language: Language) =>
	PAGE_PATHS[language][page];

export const getLocalizedPath = (pathname: string, language: Language) => {
	const page = getPageFromPath(pathname);
	return page ? getLocalizedPagePath(page, language) : PAGE_PATHS[language].home;
};
