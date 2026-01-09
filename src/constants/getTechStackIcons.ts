import logos from './logos';

export type StackIcon = { id: number; title: string; logo: string };

const getTechStackIcons = (): StackIcon[] => {
	return [
		{
			id: 0,
			title: 'HTML-logo',
			logo: logos.htmlLogo,
		},
		{
			id: 1,
			title: 'CSS-logo',
			logo: logos.cssLogo,
		},
		{
			id: 2,
			title: 'JavaScript-logo',
			logo: logos.jsLogo,
		},
		{
			id: 3,
			title: 'TypeScript-logo',
			logo: logos.tsLogo,
		},
		{
			id: 4,
			title: 'React-logo',
			logo: logos.reactLogo,
		},
		{
			id: 5,
			title: 'Expo-logo',
			logo: logos.expoLogo,
		},
	];
};

export default getTechStackIcons;
