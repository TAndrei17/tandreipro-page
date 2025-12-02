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
			<button className="header__logo btn-reset" onClick={() => navigate('/', { replace: true })}>
				<img src={icons.pageLogo} alt={t('appHeader.logoAlt')} />
			</button>

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
