import { useTranslation } from 'react-i18next';
import './SectionStyle.css';
import { type Service } from '@constants/getServiceList';

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
		<article className={'service-article'}>
			{service.article?.help && service.article?.help.length > 0 ? (
				<h2 className={'service-header-2'}>{t('services.helpTitle')}</h2>
			) : (
				<></>
			)}
			<div className="service-icon-container">
				<img src={service.icon} className={'service-icon'} />
				<p className={'service-info'}>{service.article?.help}</p>
			</div>

			{children}

			{service.article?.clients && service.article?.clients.length > 0 ? (
				<h2 className={'service-header-2'}>{t('services.targetClientsTitle')}</h2>
			) : (
				<></>
			)}
			<p className={'service-info'}>{service.article?.clients}</p>

			{service.article?.tasks && service.article?.tasks.length > 0 ? (
				<h2 className={'service-header-2'}>{t('services.tasksTitle')}</h2>
			) : (
				<></>
			)}
			<div className="service-icon-container image-block">
				<p className="service-info">{service.article?.tasks}</p>
				<div className="service-image-wrapper">
					<img src={service.image} className="service-image" />
				</div>
			</div>

			{service.article?.me && service.article?.me.length > 0 ? (
				<h2 className={'service-header-2'}>{t('services.whyWorkWithMeTitle')}</h2>
			) : (
				<></>
			)}
			<p className={'service-info'}>{service.article?.me}</p>
		</article>
	);
};

export default ServiceSection;
