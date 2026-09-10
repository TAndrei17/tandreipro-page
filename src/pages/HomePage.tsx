import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import HomeSection from '@components/home/HomeSection';
import getServiceList from '@constants/getServiceList';
import { LEGAL_PAGE_PATH } from '@constants/routes';
import { useSiteHeaderHeight } from '@context/SettingsContext';
import { useAlertCookie } from '@hooks/useAlertCookie';
import useDeviceType from '@hooks/useDeviceType';

const HomePage = () => {
	const { isMobile } = useDeviceType();
	const { t } = useTranslation();
	const { siteHeaderHeight } = useSiteHeaderHeight();
	const services = getServiceList(t);

	useAlertCookie();

	return (
		<div style={{ paddingTop: siteHeaderHeight + 10 }}>
			<main>
				{services.map((service, index) => {
					return (
						<HomeSection
							key={service.id}
							anchor={service.anchor}
							title={service.title}
							subtitle={service.subtitle}
							description={service.description}
							image={service.image}
							reverse={index % 2 !== 0 && !isMobile}
							style={index > 0 ? { marginTop: 50 } : {}}
						/>
					);
				})}
			</main>

			<div className="legal-micro-link">
				<Link to={LEGAL_PAGE_PATH}>{t('legal.title')}</Link>
			</div>
		</div>
	);
};

export default HomePage;
