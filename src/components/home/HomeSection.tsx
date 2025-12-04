import { useTranslation } from 'react-i18next';
import './SectionStyles.css';

type SectionType = {
	title: string;
	subtitle: string;
	description: string;
	buttonText?: string;
	image?: React.ReactNode;
	reverse?: boolean;
};

const HomeSection = ({
	title,
	subtitle,
	description,
	buttonText,
	image,
	reverse = false,
}: SectionType) => {
	const { t } = useTranslation('translation', { keyPrefix: 'home' });
	const buttonTitle = buttonText ? buttonText : t('sectionButton');

	return (
		<section className={`section ${reverse ? 'section-reverse' : ''}`}>
			<div className="section-content">
				<h3 className="section-subtitle">{subtitle}</h3>
				<h1 className="section-title">{title}</h1>
				<p className="section-desc">{description}</p>

				<button className="section-btn">{buttonTitle}</button>
			</div>

			<div className="section-image-wrapper">
				<div className="section-image-placeholder">{image}</div>
			</div>
		</section>
	);
};

export default HomeSection;
