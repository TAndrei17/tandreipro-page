import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import ServiceSection from '@components/services/ServiceSection';
import './styles/ServicesPage.css';
import getServiceList, { type Service } from '@constants/getServiceList';
import { LEGAL_PAGE_PATH } from '@constants/routes';
import { useSiteHeaderHeight } from '@context/SettingsContext';
import useDeviceType from '@hooks/useDeviceType';

const ServicesPage = () => {
	const { t, i18n } = useTranslation();
	const language = i18n.language;
	const { isMobile } = useDeviceType();
	const { siteHeaderHeight } = useSiteHeaderHeight();
	const services: Service[] = getServiceList(t);

	useEffect(() => {
		document.title = t('browserTabs.browserTabServices');
	}, [t, language]);

	return (
		<div style={{ paddingTop: siteHeaderHeight + (isMobile ? 5 : 0) }}>
			<main>
				<section className={'page-header'}>
					<h1>{t('appHeader.services')}</h1>
				</section>

				<section className={'page-section'}>
					<div className={'services-content'}>
						{services.map((service) => {
							return <ServiceSection key={service.id} service={service} />;
						})}
					</div>
				</section>
			</main>

			<div className="legal-micro-link">
				<Link to={LEGAL_PAGE_PATH}>{t('legal.title')}</Link>
			</div>
		</div>
	);
};

export default ServicesPage;
