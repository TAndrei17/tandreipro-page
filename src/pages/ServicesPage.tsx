import ServicesList from '@components/services/ServicesList';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './styles/ServicesPage.css';

const ServicesPage = () => {
	const { t, i18n } = useTranslation();
	const language = i18n.language;

	const [bookmark, setBookmark] = useState<number>(0);

	useEffect(() => {
		document.title = t('browserTabs.browserTabServices');
	}, [t, language]);

	return (
		<div className={'services-page'}>
			<ServicesList bookmark={bookmark} setBookmark={setBookmark} />
		</div>
	);
};

export default ServicesPage;
