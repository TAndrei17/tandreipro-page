import { type Dispatch, type SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';

import { useSiteHeaderHeight } from '@context/SettingsContext';
import './styles/DashboardNav.css';
import { useAppDispatch } from '@store/index';
import { logout } from '@store/user/services';
import createAlert from '@utils/createAlert';

const DashboardNav = ({
	active,
	setActive,
}: {
	active: number;
	setActive: Dispatch<SetStateAction<number>>;
}) => {
	const dispatch = useAppDispatch();
	const { siteHeaderHeight } = useSiteHeaderHeight();
	const { t } = useTranslation('translation', { keyPrefix: 'dashboard.nav' });
	const { t: tContact } = useTranslation('translation', { keyPrefix: 'contact.modal' });

	const setActiveTab = (tab: number) => {
		setActive(tab);
	};

	const navLinks = [
		{ to: '#admin', label: t('admin') },
		{ to: '#questions', label: t('questions') },
		{ to: '#tags', label: t('tags') },
		{ to: 'logout', label: tContact('logout') },
	];

	const onLogout = async () => {
		try {
			await dispatch(logout()).unwrap();
			createAlert('success', tContact('logoutSuccess'));
		} catch {
			createAlert('error', tContact('logoutFail'));
		}
	};

	return (
		<nav
			className="sidebar"
			style={{ '--header-height': `${siteHeaderHeight}px` } as React.CSSProperties}>
			<ul>
				{navLinks.map((item, index) => {
					if (item.to === 'logout') {
						return (
							<li key={index}>
								<span onClick={onLogout}>{tContact('logout')}</span>
							</li>
						);
					}
					return (
						<li key={index}>
							<a
								href={item.to}
								onClick={() => setActiveTab(index)}
								className={active === index ? 'active' : ''}>
								{item.label}
							</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default DashboardNav;
