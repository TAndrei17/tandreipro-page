import { useTranslation } from 'react-i18next';

import './styles/HomePage.css';
import { useEffect } from 'react';
import WebSection from '@components/home/WebSection';

const HomePage = () => {
	const { t, i18n } = useTranslation();
	const language = i18n.language;

	useEffect(() => {
		document.title = t('browserTabs.browserTabDefault');
	}, [t, language]);

	return (
		<div className={'home-page'}>
			<WebSection />
		</div>
	);
};

export default HomePage;
