import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const ContactPage = () => {
	const { t, i18n } = useTranslation();
	const language = i18n.language;

	useEffect(() => {
		document.title = t('browserTabs.browserTabContact');
	}, [t, language]);
	return <></>;
};

export default ContactPage;
