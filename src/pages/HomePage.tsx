import { useTranslation } from 'react-i18next';

import './styles/HomePage.css';
import { useEffect } from 'react';
import HomeSection from '@components/home/HomeSection';
import useDeviceType from '@hooks/useDeviceType';

const HomePage = () => {
	const { isMobile } = useDeviceType();
	const { t, i18n } = useTranslation('translation', { keyPrefix: 'home' });
	const language = i18n.language;

	useEffect(() => {
		document.title = i18n.t('browserTabs.browserTabDefault');
	}, [t, language]);

	return (
		<div className={'home-page'}>
			<HomeSection
				title={t('webSectionTitle')}
				subtitle={t('webSectionSubtitle')}
				description={t('webSectionDescription')}
			/>
			<HomeSection
				title={t('mobileSectionTitle')}
				subtitle={t('mobileSectionSubtitle')}
				description={t('mobileSectionDescription')}
				reverse={!isMobile}
			/>
			<HomeSection
				title={t('maintainSectionTitle')}
				subtitle={t('maintainSectionSubtitle')}
				description={t('maintainSectionDescription')}
			/>
		</div>
	);
};

export default HomePage;
