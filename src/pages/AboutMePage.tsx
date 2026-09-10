import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import AboutMeSection from '@components/aboutMe/AboutMeSection';
import IconsList from '@components/aboutMe/IconsList';
import getPersonalSections from '@constants/getPersonalSections';
import getTechStackIcons from '@constants/getTechStackIcons';
import getToolIcons from '@constants/getToolIcons';
import { LEGAL_PAGE_PATH } from '@constants/routes';
import { useSiteHeaderHeight } from '@context/SettingsContext';
import './styles/CommonStyles.css';

const AboutMePage = () => {
	const { t } = useTranslation();
	const { siteHeaderHeight } = useSiteHeaderHeight();
	const personalDataList = getPersonalSections(t);
	const techStackIconList = getTechStackIcons();
	const toolsIconsList = getToolIcons();

	return (
		<div style={{ paddingTop: siteHeaderHeight }}>
			<main>
				<section className={'page-header'}>
					<h1>{t('appHeader.aboutMe')}</h1>
				</section>

				<section className={'page-section'}>
					<article className={'service-article'}>
						{personalDataList.map((item) => {
							if (item.title === t('personal.summaryTitle')) {
								return (
									<AboutMeSection key={item.id} data={item}>
										<IconsList icons={techStackIconList} />
									</AboutMeSection>
								);
							}

							if (item.title === t('personal.skillsTitle')) {
								return (
									<AboutMeSection key={item.id} data={item}>
										<IconsList icons={toolsIconsList} />
									</AboutMeSection>
								);
							}

							return <AboutMeSection key={item.id} data={item} />;
						})}
					</article>
				</section>
			</main>

			<div className="legal-micro-link">
				<Link to={LEGAL_PAGE_PATH}>{t('legal.title')}</Link>
			</div>
		</div>
	);
};

export default AboutMePage;
