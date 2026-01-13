import { useTranslation } from 'react-i18next';
import { NavLink, useNavigate } from 'react-router';
import './Header.css';
import Languages from './Languages';
import icons from '@constants/icons';
import useDeviceType from '@hooks/useDeviceType';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useSiteHeaderHeight } from '@context/SettingsContext';
import logos from '@constants/logos';

const Header = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const { isMobile } = useDeviceType();
	const { setSiteHeaderHeight } = useSiteHeaderHeight();

	const [menu, setMenu] = useState<'open' | 'closed'>('closed');
	const closeMenu = () => setMenu('closed');
	const openMenu = () => setMenu('open');

	const [lngButtons, setLngButtons] = useState<'open' | 'closed'>('closed');

	const headerRef = useRef<HTMLElement>(null);
	const updateHeaderHeight = () => {
		if (headerRef.current) {
			setSiteHeaderHeight?.(headerRef.current.getBoundingClientRect().height);
		}
	};

	useLayoutEffect(() => {
		// пересчет высоты заголовка при монтировании
		updateHeaderHeight();

		// пересчет высоты заголовка при изменении размеров окна
		window.addEventListener('resize', updateHeaderHeight);

		return () => {
			window.removeEventListener('resize', updateHeaderHeight);
		};
	}, [menu, lngButtons, setSiteHeaderHeight]);

	useEffect(() => {
		if (menu === 'open') {
			const timer = setTimeout(() => setMenu('closed'), 10000);
			return () => clearTimeout(timer);
		}
	}, [menu]);

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
		<header ref={headerRef} className="header__container">
			<button
				className="header__logo"
				aria-label={t('appHeader.logoAria')}
				title={t('appHeader.logoAria')}
				onClick={(e) => {
					navigate('/', { replace: true });
					closeMenu();
					e.currentTarget.blur();
				}}>
				<img src={logos.pageLogo} alt={t('appHeader.logoAlt')} />
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

					<Languages lngButtons={lngButtons} setLngButtons={setLngButtons} />
				</div>
			) : (
				<>
					{renderNav('header__nav')}
					<Languages lngButtons={lngButtons} setLngButtons={setLngButtons} />
				</>
			)}
		</header>
	);
};

export default Header;
