import { useTranslation } from 'react-i18next';

import './styles/HomePage.css';
import { useEffect } from 'react';
import HomeSection from '@components/home/HomeSection';
import useDeviceType from '@hooks/useDeviceType';
import { useSiteHeaderHeight } from '@context/SettingsContext';

const HomePage = () => {
	const { isMobile } = useDeviceType();
	const { t, i18n } = useTranslation('translation', { keyPrefix: 'home' });
	const language = i18n.language;
	const { siteHeaderHeight } = useSiteHeaderHeight();

	useEffect(() => {
		document.title = i18n.t('browserTabs.browserTabDefault');
	}, [t, language]);

	return (
		<div style={{ paddingTop: siteHeaderHeight + 10 }}>
			<main>
				<HomeSection
					title={t('webSectionTitle')}
					subtitle={t('webSectionSubtitle')}
					description={t('webSectionDescription')}
				/>
				<HomeSection
					title={t('shopSectionTitle')}
					subtitle={t('shopSectionSubtitle')}
					description={t('shopSectionDescription')}
					reverse={!isMobile}
				/>
				<HomeSection
					title={t('mobileSectionTitle')}
					subtitle={t('mobileSectionSubtitle')}
					description={t('mobileSectionDescription')}
				/>
				<HomeSection
					title={t('maintainSectionTitle')}
					subtitle={t('maintainSectionSubtitle')}
					description={t('maintainSectionDescription')}
					reverse={!isMobile}
				/>
			</main>
		</div>
	);
};

export default HomePage;
