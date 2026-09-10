import './SectionStyle.css';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import ServiceCarousel from './ServiceCarousel';
import ServiceCta from './ServiceCta';
import ServiceFacts from './ServiceFacts';

import { type Service } from '@constants/getServiceList';
import { useSiteHeaderHeight } from '@context/SettingsContext';

const ServiceSection = ({ service }: { service: Service }) => {
	const { siteHeaderHeight } = useSiteHeaderHeight();
	const { t } = useTranslation();
	const isShop = service.anchor === 'shop';
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<article
			id={service.anchor}
			className={`service-article service-${service.anchor}`}
			style={{ scrollMarginTop: siteHeaderHeight + 16 }}>
			<header className={'service-heading'}>
				<span className={'service-number'}>0{service.id + 1}</span>
				<div className={'service-icon-badge'}>
					<img src={service.icon} className={'service-icon'} alt="" />
				</div>
				<div className={'service-heading-copy'}>
					<h2 className={'service-title'}>{service.title}</h2>
					{service.subtitle && <p className={'service-subtitle'}>{service.subtitle}</p>}
				</div>
			</header>

			{service.content && 'timeline' in service.content && (
				<div className={'service-summary'} aria-label={service.title}>
					<span>{service.content.timeline.value}</span>
					<span>{service.content.pricing.value}</span>
				</div>
			)}

			{service.description && <p className={'service-info'}>{service.description}</p>}
			{service.content && (
				<div className={'service-content'}>
					<div className={'service-intro'}>{service.content.intro}</div>
					<button
						className={'service-expand-button'}
						type="button"
						aria-expanded={isExpanded}
						onClick={() => setIsExpanded((expanded) => !expanded)}>
						{isExpanded ? `− ${t('services.hideMore')}` : `+ ${t('services.showMore')}`}
					</button>
					<div className={`service-details ${isExpanded ? 'is-expanded' : ''}`}>
						{'support' in service.content ? (
							<>
								<section aria-labelledby={`${service.anchor}-support`}>
									<h3 id={`${service.anchor}-support`}>{service.content.supportTitle}</h3>
									<ServiceCarousel
										className={'service-maintenance-support'}
										label={service.content.supportTitle}
										items={service.content.support.map((item, index) => (
											<article className={'service-maintenance-card'} key={item.title}>
												<span
													className={`service-card-mark service-card-mark-${index + 1}`}
													aria-hidden="true">
													+
												</span>
												<h4>{item.title}</h4>
												<p>{item.text}</p>
											</article>
										))}
									/>
								</section>

								<section aria-labelledby={`${service.anchor}-format`}>
									<h3 id={`${service.anchor}-format`}>{service.content.formatTitle}</h3>
									<ServiceCarousel
										className={'service-maintenance-formats'}
										label={service.content.formatTitle}
										items={service.content.formats.map((format, index) => (
											<article className={'service-maintenance-format'} key={format.title}>
												<span className={'service-step-number'}>0{index + 1}</span>
												<h4>{format.title}</h4>
												<p>{format.text}</p>
											</article>
										))}
									/>
								</section>

								<ServiceFacts
									className={'service-maintenance-facts'}
									items={[
										{ label: service.content.pricing.label, value: service.content.pricing.value },
									]}
								/>
								<ServiceCta
									title={service.content.ctaTitle}
									text={service.content.ctaText}
									button={service.content.ctaButton}
								/>
							</>
						) : 'useCases' in service.content ? (
							<>
								<section aria-labelledby={`${service.anchor}-use-cases`}>
									<h3 id={`${service.anchor}-use-cases`}>{service.content.useCasesTitle}</h3>
									<ServiceCarousel
										className={'service-mobile-use-cases'}
										label={service.content.useCasesTitle}
										items={service.content.useCases.map((useCase, index) => (
											<article className={'service-mobile-use-case'} key={useCase.title}>
												<span className={'service-step-number'}>0{index + 1}</span>
												<h4>{useCase.title}</h4>
												<strong>{useCase.label}</strong>
												<p>{useCase.text}</p>
											</article>
										))}
									/>
								</section>

								<section aria-labelledby={`${service.anchor}-capabilities`}>
									<h3 id={`${service.anchor}-capabilities`}>{service.content.capabilitiesTitle}</h3>
									<ServiceCarousel
										className={'service-mobile-capabilities'}
										label={service.content.capabilitiesTitle}
										items={service.content.capabilities.map((capability, index) => (
											<article className={'service-mobile-capability'} key={capability.title}>
												<span
													className={`service-card-mark service-card-mark-${index + 1}`}
													aria-hidden="true">
													+
												</span>
												<h4>{capability.title}</h4>
												<p>{capability.text}</p>
											</article>
										))}
									/>
								</section>

								<ServiceFacts
									items={[
										{
											label: service.content.timeline.label,
											value: service.content.timeline.value,
										},
										{ label: service.content.pricing.label, value: service.content.pricing.value },
									]}
								/>
								<ServiceCta
									title={service.content.ctaTitle}
									text={service.content.ctaText}
									button={service.content.ctaButton}
								/>
							</>
						) : isShop && 'options' in service.content ? (
							<>
								<section aria-labelledby={`${service.anchor}-options`}>
									<h3 id={`${service.anchor}-options`}>{service.content.optionsTitle}</h3>
									<div className={'service-shop-options'}>
										{service.content.options.map((option, index) => (
											<article className={'service-shop-option'} key={option.title}>
												<span className={'service-step-number'}>0{index + 1}</span>
												<h4>{option.title}</h4>
												<strong>{option.label}</strong>
												<p>{option.audience}</p>
												<p>{option.advantage}</p>
											</article>
										))}
									</div>
								</section>

								<section aria-labelledby={`${service.anchor}-benefits`}>
									<h3 id={`${service.anchor}-benefits`}>{service.content.benefitsTitle}</h3>
									<ServiceCarousel
										className={'service-benefits'}
										label={service.content.benefitsTitle}
										items={service.content.benefits.map((benefit, index) => (
											<div className={'service-benefit-card'} key={benefit.title}>
												<span
													className={`service-card-mark service-card-mark-${index + 1}`}
													aria-hidden="true">
													+
												</span>
												<h4>{benefit.title}</h4>
												<p>{benefit.text}</p>
											</div>
										))}
									/>
								</section>

								<ServiceFacts
									items={[
										{
											label: service.content.timeline.label,
											value: service.content.timeline.value,
										},
										{ label: service.content.pricing.label, value: service.content.pricing.value },
									]}
								/>
								<ServiceCta
									title={service.content.ctaTitle}
									text={service.content.ctaText}
									button={service.content.ctaButton}
								/>
							</>
						) : 'steps' in service.content ? (
							<>
								<section aria-labelledby={`${service.anchor}-benefits`}>
									<h3 id={`${service.anchor}-benefits`}>{service.content.benefitsTitle}</h3>
									<ServiceCarousel
										className={'service-benefits'}
										label={service.content.benefitsTitle}
										items={service.content.benefits.map((benefit, index) => (
											<div className={'service-benefit-card'} key={benefit.title}>
												<span
													className={`service-card-mark service-card-mark-${index + 1}`}
													aria-hidden="true">
													+
												</span>
												<h4>{benefit.title}</h4>
												<p>{benefit.text}</p>
											</div>
										))}
									/>
								</section>

								<section aria-labelledby={`${service.anchor}-steps`}>
									<h3 id={`${service.anchor}-steps`}>{service.content.stepsTitle}</h3>
									<ServiceCarousel
										className={'service-steps'}
										label={service.content.stepsTitle}
										items={service.content.steps.map((step, index) => (
											<li className={'service-step-card'} key={step.title}>
												<span className={'service-step-number'}>0{index + 1}</span>
												<h4>{step.title}</h4>
												<p>{step.text}</p>
											</li>
										))}
									/>
								</section>

								<ServiceFacts
									items={[
										{
											label: service.content.timeline.label,
											value: service.content.timeline.value,
										},
										{ label: service.content.pricing.label, value: service.content.pricing.value },
									]}
								/>
								<ServiceCta
									title={service.content.ctaTitle}
									text={service.content.ctaText}
									button={service.content.ctaButton}
								/>
							</>
						) : null}
					</div>
				</div>
			)}
		</article>
	);
};

export default ServiceSection;
