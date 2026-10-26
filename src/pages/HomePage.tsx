import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import HomeSection from '@components/home/HomeSection';
import getServiceList from '@constants/getServiceList';
import images from '@constants/images';
import { CONTACT_PAGE_PATH, LEGAL_PAGE_PATH } from '@constants/routes';
import { useSiteHeaderHeight } from '@context/SettingsContext';
import { useAlertCookie } from '@hooks/useAlertCookie';
import useDeviceType from '@hooks/useDeviceType';
import useLocalizedPath from '@hooks/useLocalizedPath';

const HomePage = () => {
	const { isMobile } = useDeviceType();
	const { t } = useTranslation();
	const { siteHeaderHeight } = useSiteHeaderHeight();
	const localizedPath = useLocalizedPath();
	const services = getServiceList(t, false);

	useAlertCookie();

	return (
		<div style={{ paddingTop: siteHeaderHeight }}>
			<main>
				{services.map((service, index) => {
					return (
						<HomeSection
							key={service.id}
							anchor={service.anchor}
							title={service.title}
							subtitle={service.homeSubtitle}
							description={service.homeDescription}
							image={index === 0 ? images.code : service.image}
							reverse={index % 2 !== 0 && !isMobile}
						/>
					);
				})}
				<section className="home-contact-cta">
					<div>
						<span className="home-contact-kicker">{t('appHeader.contact')}</span>
						<h2>{t('home.sectionButton')}</h2>
					</div>
					<Link to={localizedPath(CONTACT_PAGE_PATH)} className="home-contact-link">
						{t('appHeader.contact')}
						<span aria-hidden="true">→</span>
					</Link>
				</section>
			</main>

			<div className="legal-micro-link">
				<Link to={localizedPath(LEGAL_PAGE_PATH)}>{t('legal.title')}</Link>
			</div>
		</div>
	);
};

export default HomePage;
