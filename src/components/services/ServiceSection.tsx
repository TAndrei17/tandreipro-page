import { useTranslation } from 'react-i18next';
import './SectionStyle.css';
import createServiceList from '@constants/services';

const ServiceSection = ({
	id,
	bookmark,
	title,
}: {
	id: number;
	bookmark: number;
	title: string;
}) => {
	const { t } = useTranslation();
	const sectionId = id.toString();
	const services = createServiceList(t);

	if (id !== bookmark) {
		return null;
	}

	return (
		<section id={sectionId} className={'service-section'}>
			<article className={'service-article'}>
				<h2 className={'service-header-2'}>{t('services.helpTitle')}</h2>
				<div className="service-icon-container">
					<img src={services[id].icon} className={'service-icon'} />
					<p className={'service-info'}>{services[id].article?.help}</p>
				</div>

				<h2 className={'service-header-2'}>{t('services.targetClientsTitle')}</h2>
				<p className={'service-info'}>{services[id].article?.clients}</p>

				<h2 className={'service-header-2'}>{t('services.tasksTitle')}</h2>
				<p className={'service-info'}>{services[id].article?.tasks}</p>

				<h2 className={'service-header-2'}>{t('services.whyWorkWithMeTitle')}</h2>
				<p className={'service-info'}>{services[id].article?.me}</p>
			</article>
		</section>
	);
};

export default ServiceSection;
