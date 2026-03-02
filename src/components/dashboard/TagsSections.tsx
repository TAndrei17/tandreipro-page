import { useTranslation } from 'react-i18next';
import './styles/Sections.css';

const TagsSection = () => {
	const { t: tNav } = useTranslation('translation', { keyPrefix: 'dashboard.nav' });

	return (
		<section id={'tags'}>
			<div className={'dashboard-section-content'}>
				<h2 className={'dashboard-section-header'}>{tNav('tags')}</h2>
			</div>
		</section>
	);
};

export default TagsSection;
