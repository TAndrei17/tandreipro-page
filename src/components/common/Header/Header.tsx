import { useTranslation } from 'react-i18next';
import { NavLink, useNavigate } from 'react-router';
import './Header.css';
import Languages from './Languages';
import icons from '@constants/icons';
import useDeviceType from '@hooks/useDeviceType';

const Header = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const { isMobile } = useDeviceType();

	return (
		<header className="header__container">
			<div
				className="header__logo"
				role="button"
				tabIndex={0}
				onClick={() => navigate('/', { replace: true })}
				onKeyDown={(e) => {
					if (e.key === 'Enter' || e.key === ' ') {
						e.preventDefault();
						navigate('/', { replace: true });
					}
				}}>
				<img src={icons.pageLogo} alt={t('appHeader.logoAlt')} />
			</div>
			<nav className={isMobile ? 'header__nav_mobile' : 'header__nav'}>
				<NavLink to="/services">{t('appHeader.services')}</NavLink>
				<NavLink to="/about">{t('appHeader.aboutMe')}</NavLink>
				<NavLink to="/contact">{t('appHeader.contact')}</NavLink>
			</nav>

			<Languages />
		</header>
	);
};

export default Header;
