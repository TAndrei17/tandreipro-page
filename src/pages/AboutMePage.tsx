import AboutMeSection from '@components/aboutMe/AboutMeSection';
import IconsList from '@components/aboutMe/IconsList';
import getPersonalSections from '@constants/getPersonalSections';
import getTechStackIcons from '@constants/getTechStackIcons';
import { useSiteHeaderHeight } from '@context/SettingsContext';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const AboutMePage = () => {
	const { t, i18n } = useTranslation();
	const language = i18n.language;
	const { siteHeaderHeight } = useSiteHeaderHeight();
	const personalDataList = getPersonalSections(t);
	const iconsList = getTechStackIcons();

	useEffect(() => {
		document.title = t('browserTabs.browserTabAboutMe');
	}, [t, language]);
	return (
		<div style={{ paddingTop: siteHeaderHeight + 10 }}>
			<main>
				<section className={'service-section'}>
					<article className={'service-article'}>
						{personalDataList.map((item) => {
							if (item.title === t('personal.summaryTitle')) {
								return (
									<AboutMeSection key={item.id} data={item}>
										<IconsList icons={iconsList} />
									</AboutMeSection>
								);
							}

							return <AboutMeSection key={item.id} data={item} />;
						})}
					</article>
				</section>
			</main>
		</div>
	);
};

export default AboutMePage;
