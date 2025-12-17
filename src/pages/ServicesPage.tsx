import ServicesList from '@components/services/ServicesList';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './styles/ServicesPage.css';
import { useActiveServiceBookmark, useSiteHeaderHeight } from '@context/SettingsContext';
import useDeviceType from '@hooks/useDeviceType';
import ServiceSection from '@components/services/ServiceSection';
import createServiceList, { type Service } from '@constants/services';

const ServicesPage = () => {
	const { t, i18n } = useTranslation();
	const language = i18n.language;
	const { isMobile } = useDeviceType();
	const { siteHeaderHeight } = useSiteHeaderHeight();
	const { activeServiceBookmark, setActiveServiceBookmark } = useActiveServiceBookmark();
	const services: Service[] = createServiceList(t);

	useEffect(() => {
		document.title = t('browserTabs.browserTabServices');
	}, [t, language]);

	return (
		<div style={{ paddingTop: siteHeaderHeight + (isMobile ? 20 : 30) }}>
			<ServicesList bookmark={activeServiceBookmark} setBookmark={setActiveServiceBookmark} />

			<main>
				{services.map((service) => {
					return (
						<ServiceSection key={service.id} service={service} bookmark={activeServiceBookmark} />
					);
				})}
			</main>
		</div>
	);
};

export default ServicesPage;
