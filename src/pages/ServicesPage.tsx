import ServicesList from '@components/services/ServicesList';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './styles/ServicesPage.css';
import { useActiveServiceBookmark, useSiteHeaderHeight } from '@context/SettingsContext';

const ServicesPage = () => {
	const { t, i18n } = useTranslation();
	const language = i18n.language;
	const { siteHeaderHeight } = useSiteHeaderHeight();
	const { activeServiceBookmark, setActiveServiceBookmark } = useActiveServiceBookmark();

	useEffect(() => {
		document.title = t('browserTabs.browserTabServices');
	}, [t, language]);

	return (
		<div style={{ paddingTop: siteHeaderHeight + 60 }}>
			<ServicesList bookmark={activeServiceBookmark} setBookmark={setActiveServiceBookmark} />
		</div>
	);
};

export default ServicesPage;
