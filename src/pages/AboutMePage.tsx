import AboutMeSection from '@components/aboutMe/aboutMeSection';
import createPersonalList from '@constants/aboutMe';
import { useSiteHeaderHeight } from '@context/SettingsContext';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const AboutMePage = () => {
	const { t, i18n } = useTranslation();
	const language = i18n.language;
	const { siteHeaderHeight } = useSiteHeaderHeight();
	const personalDataList = createPersonalList(t);

	useEffect(() => {
		document.title = t('browserTabs.browserTabAboutMe');
	}, [t, language]);
	return (
		<div style={{ paddingTop: siteHeaderHeight + 10 }}>
			<main>
				<section className={'service-section'}>
					<article className={'service-article'}>
						{personalDataList.map((item) => (
							<AboutMeSection key={item.id} data={item} />
						))}
					</article>
				</section>
			</main>
		</div>
	);
};

export default AboutMePage;
