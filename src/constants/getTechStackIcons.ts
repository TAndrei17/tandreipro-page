import logos from './logos';

export type StackIcon = { id: number; title: string; logo: string };

const getTechStackIcons = (): StackIcon[] => {
	return [
		{
			id: 0,
			title: 'JavaScript-logo',
			logo: logos.jsLogo,
		},
		{
			id: 1,
			title: 'TypeScript-logo',
			logo: logos.tsLogo,
		},
		{
			id: 2,
			title: 'React-logo',
			logo: logos.reactLogo,
		},
		{
			id: 3,
			title: 'Expo-logo',
			logo: logos.expoLogo,
		},
	];
};

export default getTechStackIcons;
