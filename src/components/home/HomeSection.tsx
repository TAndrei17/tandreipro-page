import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './SectionStyles.css';
import { useNavigate } from 'react-router';

import ButtonRight from '@components/common/UI/ButtonRight';
import { type ServiceAnchor } from '@constants/getServiceList';
import { SERVICES_PAGE_PATH } from '@constants/routes';
import useLocalizedPath from '@hooks/useLocalizedPath';

type SectionType = {
	anchor: ServiceAnchor;
	title: string;
	subtitle: string;
	description: string;
	buttonText?: string;
	image?: string;
	reverse?: boolean;
};

const HomeSection = ({
	anchor,
	title,
	subtitle,
	description,
	buttonText,
	image,
	reverse = false,
}: SectionType) => {
	const { t } = useTranslation('translation', { keyPrefix: 'home' });
	const navigate = useNavigate();
	const localizedPath = useLocalizedPath();
	const sectionRef = useRef<HTMLElement>(null);
	const buttonTitle = buttonText ? buttonText : t('sectionButton');

	useEffect(() => {
		const section = sectionRef.current;
		if (!section) return;

		if (!('IntersectionObserver' in window)) {
			section.classList.add('is-visible');
			return;
		}

		section.classList.add('reveal-ready');
		const reveal = () => {
			section.classList.add('is-visible');
			observer.unobserve(section);
			window.removeEventListener('scroll', revealIfVisible);
			window.removeEventListener('resize', revealIfVisible);
		};
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					reveal();
				}
			},
			{ threshold: 0.15 }
		);
		const revealIfVisible = () => {
			const { top, bottom } = section.getBoundingClientRect();
			if (top < window.innerHeight && bottom > 0) reveal();
		};

		observer.observe(section);
		window.addEventListener('scroll', revealIfVisible, { passive: true });
		window.addEventListener('resize', revealIfVisible);
		revealIfVisible();
		return () => {
			observer.disconnect();
			window.removeEventListener('scroll', revealIfVisible);
			window.removeEventListener('resize', revealIfVisible);
		};
	}, []);

	const navigateToServices: VoidFunction = () => {
		navigate(`${localizedPath(SERVICES_PAGE_PATH)}#${anchor}`);
	};

	return (
		<section
			ref={sectionRef}
			className={`section section-${anchor} home-section-reveal ${reverse ? 'section-reverse' : ''}`}>
			<div className={reverse ? 'section-content-reverse' : 'section-content'}>
				<h3 className="section-subtitle">{subtitle}</h3>
				<h2
					className="section-title"
					onClick={navigateToServices}
					role="button"
					tabIndex={0}
					onKeyDown={(e) => e.key === 'Enter' && navigateToServices()}>
					{title}
				</h2>
				<p className="section-desc">{description}</p>

				<ButtonRight
					className={'section-btn'}
					onClick={navigateToServices}
					buttonTitle={buttonTitle}
				/>
			</div>

			<div className="section-image-wrapper">
				<img src={image} className="section-image" alt={title} />
			</div>
		</section>
	);
};

export default HomeSection;
