import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const ServicesPage = () => {
	const { t, i18n } = useTranslation();
	const language = i18n.language;

	useEffect(() => {
		document.title = t('browserTabs.browserTabServices');
	}, [t, language]);
	return <></>;
};

export default ServicesPage;
