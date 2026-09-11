import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import AboutMeSection from '@components/aboutMe/AboutMeSection';
import IconsList from '@components/aboutMe/IconsList';
import getPersonalSections from '@constants/getPersonalSections';
import getTechStackIcons, { type StackIcon } from '@constants/getTechStackIcons';
import getToolIcons from '@constants/getToolIcons';
import images from '@constants/images';
import { CONTACT_PAGE_PATH, LEGAL_PAGE_PATH } from '@constants/routes';
import { useSiteHeaderHeight } from '@context/SettingsContext';
import './styles/CommonStyles.css';

const AboutMePage = () => {
	const { t } = useTranslation();
	const { siteHeaderHeight } = useSiteHeaderHeight();
	const personalDataList = getPersonalSections(t);
	const techStackIconList = getTechStackIcons();
	const toolsIconsList = getToolIcons();
	const unifiedTechStack: StackIcon[] = [
		...techStackIconList,
		{ id: 5, title: 'React Native' },
		{ id: 6, title: 'Redux / Redux Toolkit' },
		{ id: 7, title: 'Node.js' },
		{ id: 8, title: 'PostgreSQL' },
		...toolsIconsList.map((icon, index) => ({ ...icon, id: 9 + index })),
	];
	const summary = personalDataList.find((item) => item.id === 0);
	const skills = personalDataList.find((item) => item.id === 1);
	const milestones = personalDataList.filter((item) => item.id >= 2 && item.description.length > 0);
	const stats = personalDataList.filter((item) => item.description.length > 0);

	return (
		<div className="about-page" style={{ paddingTop: siteHeaderHeight }}>
			<main>
				<section className="about-hero">
					<div className="about-hero-content">
						<span className="about-eyebrow">{t('appHeader.aboutMe')}</span>
						<h1>{t('appHeader.aboutMe')}</h1>
						{summary && <AboutMeSection data={summary} />}
						<Link className="about-hero-link" to={`${CONTACT_PAGE_PATH}#contact-form`}>
							{t('appHeader.contact')}
							<span aria-hidden="true">→</span>
						</Link>
					</div>
					<div className="about-portrait-frame">
						<img src={images.tandrei} alt={t('appHeader.logoAlt')} />
					</div>
				</section>

				<section className="about-stats" aria-label={t('appHeader.aboutMe')}>
					{stats.map((item, index) => (
						<article className="about-stat-card" key={item.id}>
							<span>0{index + 1}</span>
							<strong>{item.title}</strong>
							<p>{item.description.split('\n')[0]}</p>
						</article>
					))}
				</section>

				<section className="about-bento">
					<div className="about-section-heading">
						<span className="about-eyebrow">{skills?.title}</span>
						<h2>{t('personal.skillsTitle')}</h2>
					</div>
					<div className="about-bento-grid">
						<article className="about-bento-card about-bento-card-wide">
							<h3>{t('personal.skillsTitle')}</h3>
							{skills && <AboutMeSection data={skills} />}
						</article>
						<article className="about-bento-card">
							<h3>{t('personal.summaryTitle')}</h3>
							<IconsList icons={unifiedTechStack} />
						</article>
					</div>
				</section>

				<section className="about-timeline">
					<div className="about-section-heading">
						<span className="about-eyebrow">{t('personal.positionTitle')}</span>
						<h2>{t('personal.teamTitle')}</h2>
					</div>
					<div className="about-timeline-list">
						{milestones.map((item, index) => (
							<div className="about-timeline-item" key={item.id}>
								<span className="about-timeline-marker">0{index + 1}</span>
								<AboutMeSection data={item} />
							</div>
						))}
					</div>
				</section>

				<section className="about-closing-cta">
					<div>
						<span className="about-eyebrow">{t('appHeader.contact')}</span>
						<h2>{t('personal.positionTitle')}</h2>
					</div>
					<Link to={`${CONTACT_PAGE_PATH}#contact-form`}>
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

export default AboutMePage;
