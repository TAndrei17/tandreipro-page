import { createContext, useContext, useState, type Dispatch, type SetStateAction } from 'react';

type Settings = {
	siteHeaderHeight: number;
	setSiteHeaderHeight: Dispatch<SetStateAction<number>> | VoidFunction;
	activeServiceBookmark: number;
	setActiveServiceBookmark: Dispatch<SetStateAction<number>> | VoidFunction;
};

const SettingsContext = createContext<Settings>({
	siteHeaderHeight: 0,
	setSiteHeaderHeight: () => {},
	activeServiceBookmark: 0,
	setActiveServiceBookmark: () => {},
});

const SettingsProvider = ({ children }: { children: React.ReactNode }) => {
	const [siteHeaderHeight, setSiteHeaderHeight] = useState<number>(0);
	const [activeServiceBookmark, setActiveServiceBookmark] = useState<number>(0);

	return (
		<SettingsContext.Provider
			value={{
				siteHeaderHeight,
				setSiteHeaderHeight,
				activeServiceBookmark,
				setActiveServiceBookmark,
			}}>
			{children}
		</SettingsContext.Provider>
	);
};

const useSiteHeaderHeight = () => {
	const { siteHeaderHeight, setSiteHeaderHeight } = useContext(SettingsContext);
	return { siteHeaderHeight, setSiteHeaderHeight };
};

const useActiveServiceBookmark = () => {
	const { activeServiceBookmark, setActiveServiceBookmark } = useContext(SettingsContext);
	return { activeServiceBookmark, setActiveServiceBookmark };
};

export default SettingsProvider;
export { useSiteHeaderHeight, useActiveServiceBookmark };
