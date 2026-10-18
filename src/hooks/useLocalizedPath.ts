import { useTranslation } from 'react-i18next';

import { getLanguageFromPath, getLocalizedPath } from '@constants/routes';

const useLocalizedPath = () => {
	const { i18n } = useTranslation();

	return (pathname: string) =>
		getLocalizedPath(pathname, getLanguageFromPath(`/${i18n.language.slice(0, 2)}`));
};

export default useLocalizedPath;
