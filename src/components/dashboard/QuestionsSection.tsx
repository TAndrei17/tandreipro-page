import { useTranslation } from 'react-i18next';
import './styles/Sections.css';

const QuestionsSection = () => {
	const { t: tNav } = useTranslation('translation', { keyPrefix: 'dashboard.nav' });

	return (
		<section id={tNav('questions')} className={'dashboard-section'}>
			<div className={'dashboard-section-content'}>
				<h2 className={'dashboard-section-header'}>{tNav('questions')}</h2>
			</div>
		</section>
	);
};

export default QuestionsSection;
