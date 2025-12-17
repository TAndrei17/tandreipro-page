import { useTranslation } from 'react-i18next';
import './SectionStyle.css';
import { type Service } from '@constants/services';

const ServiceSection = ({
	service,
	bookmark,
	children,
}: {
	service: Service;
	bookmark: number;
	children?: React.ReactNode;
}) => {
	const { t } = useTranslation();

	if (service.id !== bookmark) {
		return null;
	}

	return (
		<section className={'service-section'}>
			<article className={'service-article'}>
				<h2 className={'service-header-2'}>{t('services.helpTitle')}</h2>
				<div className="service-icon-container">
					<img src={service.icon} className={'service-icon'} />
					<p className={'service-info'}>{service.article?.help}</p>
				</div>

				{children}

				<h2 className={'service-header-2'}>{t('services.targetClientsTitle')}</h2>
				<p className={'service-info'}>{service.article?.clients}</p>

				<h2 className={'service-header-2'}>{t('services.tasksTitle')}</h2>
				<p className={'service-info'}>{service.article?.tasks}</p>

				<h2 className={'service-header-2'}>{t('services.whyWorkWithMeTitle')}</h2>
				<p className={'service-info'}>{service.article?.me}</p>
			</article>
		</section>
	);
};

export default ServiceSection;
