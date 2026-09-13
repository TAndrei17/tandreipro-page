import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import HomeSection from '@components/home/HomeSection';
import getServiceList from '@constants/getServiceList';
import images from '@constants/images';
import { CONTACT_PAGE_PATH, LEGAL_PAGE_PATH } from '@constants/routes';
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
							subtitle={service.homeSubtitle}
							description={service.homeDescription}
							image={index === 0 ? images.code : service.image}
							reverse={index % 2 !== 0 && !isMobile}
							style={index > 0 ? { marginTop: 50 } : {}}
						/>
					);
				})}
				<section className="home-contact-cta">
					<div>
						<span className="home-contact-kicker">{t('appHeader.contact')}</span>
						<h2>{t('home.sectionButton')}</h2>
					</div>
					<Link to={CONTACT_PAGE_PATH} className="home-contact-link">
						{t('appHeader.contact')}
						<span aria-hidden="true">→</span>
					</Link>
				</section>
			</main>

			<div className="legal-micro-link">
				<Link to={LEGAL_PAGE_PATH}>{t('legal.title')}</Link>
			</div>
		</div>
	);
};

export default HomePage;
