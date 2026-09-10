import './SectionStyle.css';

import { Link } from 'react-router-dom';

import { type Service } from '@constants/getServiceList';
import { CONTACT_PAGE_PATH } from '@constants/routes';
import { useSiteHeaderHeight } from '@context/SettingsContext';

const ServiceSection = ({ service }: { service: Service }) => {
	const { siteHeaderHeight } = useSiteHeaderHeight();

	return (
		<article
			id={service.anchor}
			className={'service-article'}
			style={{ scrollMarginTop: siteHeaderHeight + 16 }}>
			<header className={'service-heading'}>
				<div className={'service-icon-badge'}>
					<img src={service.icon} className={'service-icon'} alt="" />
				</div>
				<div className={'service-heading-copy'}>
					<h2 className={'service-title'}>{service.title}</h2>
					{service.subtitle && <p className={'service-subtitle'}>{service.subtitle}</p>}
				</div>
			</header>

			{service.description && <p className={'service-info'}>{service.description}</p>}
			{service.content && (
				<div className={'service-content'}>
					<div className={'service-intro'}>{service.content.intro}</div>

					<section aria-labelledby={`${service.anchor}-benefits`}>
						<h3 id={`${service.anchor}-benefits`}>{service.content.benefitsTitle}</h3>
						<div className={'service-benefits'}>
							{service.content.benefits.map((benefit) => (
								<div className={'service-benefit-card'} key={benefit.title}>
									<span className={'service-card-mark'} aria-hidden="true">
										+
									</span>
									<h4>{benefit.title}</h4>
									<p>{benefit.text}</p>
								</div>
							))}
						</div>
					</section>

					<section aria-labelledby={`${service.anchor}-steps`}>
						<h3 id={`${service.anchor}-steps`}>{service.content.stepsTitle}</h3>
						<ol className={'service-steps'}>
							{service.content.steps.map((step, index) => (
								<li className={'service-step-card'} key={step.title}>
									<span className={'service-step-number'}>0{index + 1}</span>
									<h4>{step.title}</h4>
									<p>{step.text}</p>
								</li>
							))}
						</ol>
					</section>

					<dl className={'service-facts'}>
						<div>
							<dt>{service.content.timeline.label}</dt>
							<dd>{service.content.timeline.value}</dd>
						</div>
						<div>
							<dt>{service.content.pricing.label}</dt>
							<dd>{service.content.pricing.value}</dd>
						</div>
					</dl>

					<div className={'service-cta'}>
						<div>
							<h3>{service.content.ctaTitle}</h3>
							<p>{service.content.ctaText}</p>
						</div>
						<Link className={'service-cta-link'} to={CONTACT_PAGE_PATH}>
							{service.content.ctaButton}
							<span aria-hidden="true">→</span>
						</Link>
					</div>
				</div>
			)}
		</article>
	);
};

export default ServiceSection;
