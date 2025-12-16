import { type TFunction } from 'i18next';

type Service = {
	id: number;
	title: string;
	subtitle: string;
	description: string;
};

const createServiceList = (t: TFunction): Service[] => [
	{
		id: 0,
		title: t('entites.webSectionTitle'),
		subtitle: t('entites.webSectionSubtitle'),
		description: t('entites.webSectionDescription'),
	},

	{
		id: 1,
		title: t('entites.shopSectionTitle'),
		subtitle: t('entites.shopSectionSubtitle'),
		description: t('entites.shopSectionDescription'),
	},

	{
		id: 2,
		title: t('entites.mobileSectionTitle'),
		subtitle: t('entites.mobileSectionSubtitle'),
		description: t('entites.mobileSectionDescription'),
	},

	{
		id: 3,
		title: t('entites.maintainSectionTitle'),
		subtitle: t('entites.maintainSectionSubtitle'),
		description: t('entites.maintainSectionDescription'),
	},
];

export default createServiceList;
