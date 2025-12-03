import { useTranslation } from 'react-i18next';
import './SectionStyles.css';

const WebSection = () => {
	const { t } = useTranslation('translation', { keyPrefix: 'home' });

	return (
		<section className="section">
			<div className="section-content">
				<h3 className="section-subtitle">{t('webSectionSubtitle')}</h3>
				<h1 className="section-title">{t('webSectionTitle')}</h1>
				<p className="section-desc">{t('webSectionDescription')}</p>

				<button className="section-btn">{t('webSectionButton')}</button>
			</div>

			<div className="section-image-wrapper">
				<div className="section-image-placeholder">{/* сюда вставишь картинку */}</div>
			</div>
		</section>
	);
};

export default WebSection;
