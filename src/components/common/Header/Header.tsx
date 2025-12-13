import { useTranslation } from 'react-i18next';
import { NavLink, useNavigate } from 'react-router';
import './Header.css';
import Languages from './Languages';
import icons from '@constants/icons';
import useDeviceType from '@hooks/useDeviceType';
import { useState } from 'react';

const Header = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const { isMobile } = useDeviceType();
	const [menu, setMenu] = useState<'open' | 'closed'>('closed');

	const closeMenu = () => setMenu('closed');
	const openMenu = () => setMenu('open');

	const navLinks = [
		{ to: '/services', label: t('appHeader.services') },
		{ to: '/about', label: t('appHeader.aboutMe') },
		{ to: '/contact', label: t('appHeader.contact') },
	];

	const renderNav = (className: string, onLinkClick?: () => void) => (
		<nav className={className} aria-label={t('appHeader.navAria')}>
			{navLinks.map(({ to, label }) => (
				<NavLink key={to} to={to} onClick={onLinkClick}>
					{label}
				</NavLink>
			))}
		</nav>
	);

	return (
		<header className="header__container">
			<button
				className="header__logo"
				aria-label={t('appHeader.logoAria')}
				title={t('appHeader.logoAria')}
				onClick={(e) => {
					navigate('/', { replace: true });
					closeMenu();
					e.currentTarget.blur();
				}}>
				<img src={icons.pageLogo} alt={t('appHeader.logoAlt')} />
			</button>

			{isMobile ? (
				<div className="icons__container_mobile">
					{menu === 'closed' && (
						<img
							role="button"
							title={t('appHeader.openNavAlt')}
							alt={t('appHeader.openNavAlt')}
							aria-haspopup="true"
							aria-expanded={menu !== 'closed'}
							tabIndex={0}
							className="languages__icon"
							src={icons.burgerMenu}
							onClick={openMenu}
							onKeyDown={(e) => {
								if (e.key === 'Enter' || e.key === ' ') {
									e.preventDefault();
									openMenu();
								}
							}}
						/>
					)}

					{menu === 'open' && renderNav('header__nav_mobile', closeMenu)}

					<Languages />
				</div>
			) : (
				<>
					{renderNav('header__nav')}
					<Languages />
				</>
			)}
		</header>
	);
};

export default Header;
