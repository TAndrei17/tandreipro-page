import { useTranslation } from 'react-i18next';
import './styles/Sections.css';

const AdminSection = () => {
	const { t: tNav } = useTranslation('translation', { keyPrefix: 'dashboard.nav' });

	return (
		<section id={tNav('admin')}>
			<h2 className={'dashboard-section-header'}>{tNav('admin')}</h2>
		</section>
	);
};

export default AdminSection;
