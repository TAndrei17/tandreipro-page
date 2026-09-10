import './SectionStyle.css';
import { type Service } from '@constants/getServiceList';
import { useSiteHeaderHeight } from '@context/SettingsContext';

const ServiceSection = ({ service }: { service: Service }) => {
	const { siteHeaderHeight } = useSiteHeaderHeight();

	return (
		<article
			id={service.anchor}
			className={'service-article'}
			style={{ scrollMarginTop: siteHeaderHeight + 16 }}>
			<div className={'service-icon-badge'}>
				<img src={service.icon} className={'service-icon'} alt="" />
			</div>

			<h2 className={'service-title'}>{service.title}</h2>
			<p className={'service-info'}>{service.description}</p>
		</article>
	);
};

export default ServiceSection;
