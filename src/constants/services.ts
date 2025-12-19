import { type TFunction } from 'i18next';
import icons from './icons';

export type Service = {
	id: number;
	title: string;
	subtitle: string;
	description: string;
	article?: {
		help: string;
		clients: string;
		tasks: string;
		me: string;
	};
	icon?: string;
};

const createServiceList = (t: TFunction): Service[] => [
	{
		id: 0,
		title: t('entites.webSectionTitle'),
		subtitle: t('entites.webSectionSubtitle'),
		description: t('entites.webSectionDescription'),
		article: {
			help: t('services.webHelp'),
			clients: t('services.webClients'),
			tasks: t('services.webTasks'),
			me: t('services.webWhyMe'),
		},
		icon: icons.pageBrowser,
	},

	{
		id: 1,
		title: t('entites.shopSectionTitle'),
		subtitle: t('entites.shopSectionSubtitle'),
		description: t('entites.shopSectionDescription'),
		icon: icons.onlineStore,
	},

	{
		id: 2,
		title: t('entites.mobileSectionTitle'),
		subtitle: t('entites.mobileSectionSubtitle'),
		description: t('entites.mobileSectionDescription'),
		icon: icons.smartphone,
	},

	{
		id: 3,
		title: t('entites.maintainSectionTitle'),
		subtitle: t('entites.maintainSectionSubtitle'),
		description: t('entites.maintainSectionDescription'),
		icon: icons.maintenance,
	},
];

export default createServiceList;
