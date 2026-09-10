import { type MouseEvent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import ServiceSection from '@components/services/ServiceSection';
import './styles/ServicesPage.css';
import getServiceList, { type Service } from '@constants/getServiceList';
import { LEGAL_PAGE_PATH } from '@constants/routes';
import { useSiteHeaderHeight } from '@context/SettingsContext';
import useDeviceType from '@hooks/useDeviceType';

const ServicesPage = () => {
	const { t } = useTranslation();
	const { isMobile } = useDeviceType();
	const { siteHeaderHeight } = useSiteHeaderHeight();
	const services: Service[] = getServiceList(t);
	const [activeAnchor, setActiveAnchor] = useState(services[0]?.anchor);

	const navigateToService = (event: MouseEvent<HTMLAnchorElement>, anchor: string) => {
		event.preventDefault();
		const target = document.getElementById(anchor);
		const navigation = event.currentTarget.closest('nav');
		if (!target || !(navigation instanceof HTMLElement)) return;

		const top =
			target.getBoundingClientRect().top +
			window.scrollY -
			siteHeaderHeight -
			navigation.offsetHeight -
			16;
		window.scrollTo({ top, behavior: 'smooth' });
		window.history.replaceState(null, '', `#${anchor}`);
	};

	useEffect(() => {
		const sections = services
			.map((service) => document.getElementById(service.anchor))
			.filter((section): section is HTMLElement => Boolean(section));
		if (!sections.length) return;

		const observer = new IntersectionObserver(
			(entries) => {
				const visibleSection = entries
					.filter((entry) => entry.isIntersecting)
					.sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];
				if (visibleSection) setActiveAnchor(visibleSection.target.id as Service['anchor']);
			},
			{ rootMargin: `-${siteHeaderHeight + 80}px 0px -45%`, threshold: [0.1, 0.35, 0.6] }
		);

		sections.forEach((section) => observer.observe(section));
		return () => observer.disconnect();
	}, [services, siteHeaderHeight]);

	return (
		<div style={{ paddingTop: siteHeaderHeight + (isMobile ? 5 : 0) }}>
			<main>
				<section className={'page-header'}>
					<h1>{t('appHeader.services')}</h1>
				</section>

				<nav
					className={'services-navigation'}
					aria-label={t('appHeader.services')}
					style={{ top: siteHeaderHeight }}>
					{services.map((service) => (
						<a
							key={service.id}
							href={`#${service.anchor}`}
							onClick={(event) => navigateToService(event, service.anchor)}
							className={`services-navigation-link ${activeAnchor === service.anchor ? 'is-active' : ''}`}
							aria-current={activeAnchor === service.anchor ? 'location' : undefined}>
							<span className={'services-navigation-number'}>0{service.id + 1}</span>
							{service.title}
						</a>
					))}
				</nav>

				<section className={'page-section'}>
					<div className={'services-content'}>
						{services.map((service) => {
							return <ServiceSection key={service.id} service={service} />;
						})}
					</div>
				</section>
			</main>

			<div className="legal-micro-link">
				<Link to={LEGAL_PAGE_PATH}>{t('legal.title')}</Link>
			</div>
		</div>
	);
};

export default ServicesPage;
