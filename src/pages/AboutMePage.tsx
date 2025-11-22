import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const AboutMePage = () => {
	const { t, i18n } = useTranslation();
	const language = i18n.language;

	useEffect(() => {
		document.title = t('browserTabs.browserTabAboutMe');
	}, [t, language]);
	return <></>;
};

export default AboutMePage;
