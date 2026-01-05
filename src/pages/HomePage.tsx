import { useTranslation } from 'react-i18next';

import './styles/HomePage.css';
import { useEffect } from 'react';
import HomeSection from '@components/home/HomeSection';
import useDeviceType from '@hooks/useDeviceType';
import { useSiteHeaderHeight } from '@context/SettingsContext';
import getServiceList from '@constants/getServiceList';

const HomePage = () => {
	const { isMobile } = useDeviceType();
	const { t, i18n } = useTranslation();
	const language = i18n.language;
	const { siteHeaderHeight } = useSiteHeaderHeight();
	const services = getServiceList(t);

	useEffect(() => {
		document.title = t('browserTabs.browserTabDefault');
	}, [t, language]);

	return (
		<div style={{ paddingTop: siteHeaderHeight + 10 }}>
			<main>
				{services.map((service, index) => {
					return (
						<HomeSection
							key={service.id}
							id={service.id}
							title={service.title}
							subtitle={service.subtitle}
							description={service.description}
							reverse={index % 2 !== 0 && !isMobile}
						/>
					);
				})}
			</main>
		</div>
	);
};

export default HomePage;
