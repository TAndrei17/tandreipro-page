import type { Language } from '@constants/routes';

const resources = {
	en: () => import('./en').then(({ default: language }) => language),
	es: () => import('./es').then(({ default: language }) => language),
	ru: () => import('./ru').then(({ default: language }) => language),
} satisfies Record<Language, () => Promise<{ translation: object }>>;

export default resources;
