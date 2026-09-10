import React from 'react';
import { useTranslation } from 'react-i18next';
import './SectionStyles.css';
import { useNavigate } from 'react-router';

import ButtonRight from '@components/common/UI/ButtonRight';
import { type ServiceAnchor } from '@constants/getServiceList';
import { SERVICES_PAGE_PATH } from '@constants/routes';

type SectionType = {
	anchor: ServiceAnchor;
	title: string;
	subtitle: string;
	description: string;
	buttonText?: string;
	image?: string;
	reverse?: boolean;
	style?: React.CSSProperties;
};

const HomeSection = ({
	anchor,
	title,
	subtitle,
	description,
	buttonText,
	image,
	reverse = false,
	style,
}: SectionType) => {
	const { t } = useTranslation('translation', { keyPrefix: 'home' });
	const navigate = useNavigate();
	const buttonTitle = buttonText ? buttonText : t('sectionButton');

	const navigateToServices: VoidFunction = () => {
		navigate(`${SERVICES_PAGE_PATH}#${anchor}`);
	};

	return (
		<section className={`section ${reverse ? 'section-reverse' : ''}`} style={style}>
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
				<img src={image} className="section-image" />
			</div>
		</section>
	);
};

export default HomeSection;
