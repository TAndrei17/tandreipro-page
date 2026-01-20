import logos from './logos';

export type StackIcon = { id: number; title: string; logo: string };

const getToolIcons = (): StackIcon[] => {
	return [
		{
			id: 0,
			title: 'Git-logo',
			logo: logos.gitLogo,
		},
		{
			id: 1,
			title: 'GitHub-logo',
			logo: logos.gitHubLogo,
		},
		{
			id: 2,
			title: 'Expo-logo',
			logo: logos.expoLogo,
		},
		{
			id: 3,
			title: 'ESLint-logo',
			logo: logos.eslintLogo,
		},
		{
			id: 4,
			title: 'Prettier-logo',
			logo: logos.prettierLogo,
		},
	];
};

export default getToolIcons;
