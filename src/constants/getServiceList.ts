import { type TFunction } from 'i18next';

import icons from './icons';
import images from './images';

import {
	type MaintenanceContent,
	type MobileContent,
	type ShopContent,
	type WebsiteContent,
} from '@assets/articles/websites';

export type ServiceAnchor = 'web' | 'shop' | 'mobile' | 'maintain';

export type Service = {
	id: number;
	anchor: ServiceAnchor;
	title: string;
	subtitle: string;
	description: string;
	homeSubtitle: string;
	homeDescription: string;
	content?: WebsiteContent | ShopContent | MobileContent | MaintenanceContent;
	article?: {
		help: string;
		clients: string;
		tasks: string;
		me: string;
	};
	icon?: string;
	image?: string;
};

const getServiceList = (t: TFunction): Service[] => [
	{
		id: 0,
		anchor: 'web',
		title: t('entites.webSectionTitle'),
		subtitle: '',
		description: '',
		homeSubtitle: t('entites.webSectionSubtitle'),
		homeDescription: t('entites.webSectionDescription'),
		content: t('services.webContent', { returnObjects: true }) as unknown as WebsiteContent,
		article: {
			help: t('services.webHelp'),
			clients: t('services.webClients'),
			tasks: t('services.webTasks'),
			me: t('services.webWhyMe'),
		},
		icon: icons.pageBrowser,
		image: images.code,
	},

	{
		id: 1,
		anchor: 'shop',
		title: t('entites.shopSectionTitle'),
		subtitle: '',
		description: '',
		homeSubtitle: t('entites.shopSectionSubtitle'),
		homeDescription: t('entites.shopSectionDescription'),
		article: {
			help: t('services.shopHelp'),
			clients: t('services.shopClients'),
			tasks: t('services.shopTasks'),
			me: t('services.shopWhyMe'),
		},
		content: t('services.shopContent', { returnObjects: true }) as unknown as ShopContent,
		icon: icons.onlineStore,
		image: images.shop,
	},

	{
		id: 2,
		anchor: 'mobile',
		title: t('entites.mobileSectionTitle'),
		subtitle: '',
		description: '',
		homeSubtitle: t('entites.mobileSectionSubtitle'),
		homeDescription: t('entites.mobileSectionDescription'),
		article: {
			help: t('services.mobileHelp'),
			clients: t('services.mobileClients'),
			tasks: t('services.mobileTasks'),
			me: t('services.mobileWhyMe'),
		},
		content: t('services.mobileContent', { returnObjects: true }) as unknown as MobileContent,
		icon: icons.smartphone,
		image: images.apps,
	},

	{
		id: 3,
		anchor: 'maintain',
		title: t('entites.maintainSectionTitle'),
		subtitle: '',
		description: '',
		homeSubtitle: t('entites.maintainSectionSubtitle'),
		homeDescription: t('entites.maintainSectionDescription'),
		article: {
			help: t('services.maintenanceHelp'),
			clients: t('services.maintenanceClients'),
			tasks: t('services.maintenanceTasks'),
			me: t('services.maintenanceWhyMe'),
		},
		content: t('services.maintenanceContent', {
			returnObjects: true,
		}) as unknown as MaintenanceContent,
		icon: icons.maintenance,
		image: images.webSite,
	},
];

export default getServiceList;
