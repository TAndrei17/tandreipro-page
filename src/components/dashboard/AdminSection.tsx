import { useTranslation } from 'react-i18next';

import './styles/Sections.css';
import { useAppSelector } from '@store/index';
import { userSelectors } from '@store/user/selectors';

const AdminSection = () => {
	const { t } = useTranslation('translation', { keyPrefix: 'dashboard' });
	const adminData = useAppSelector(userSelectors.selectAll);
	const admin = adminData[0];

	return (
		<section id={t('nav.admin')}>
			<div className={'dashboard-section-content'}>
				<h2 className={'dashboard-section-header'}>{t('nav.admin')}</h2>

				<div className="admin-card">
					<div className="admin-info">
						<div className="admin-field">
							<span className="label">{t('admin.name')}</span>
							<span className="value">{admin.name}</span>
						</div>

						<div className="admin-field">
							<span className="label">{t('admin.role')}</span>
							<span className="value">{admin.role}</span>
						</div>

						<div className="admin-field">
							<span className="label">{t('admin.id')}</span>
							<span className="value">{admin.id}</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AdminSection;
