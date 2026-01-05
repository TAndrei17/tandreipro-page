import type { TFunction } from 'i18next';

export type Personal = {
	id: number;
	title: string;
	description: string;
	list?: string[];
};

const getPersonalSections = (t: TFunction): Personal[] => [
	{
		id: 0,
		title: t('personal.summaryTitle'),
		description: t('personal.summaryDesc'),
	},
	{ id: 1, title: t('personal.skillsTitle'), description: t('personal.skillsDesc') },
	{ id: 2, title: t('personal.projectsTitle'), description: '' },
	{ id: 3, title: t('personal.positionTitle'), description: '' },
	{ id: 4, title: t('personal.teamTitle'), description: '' },
];

export default getPersonalSections;
