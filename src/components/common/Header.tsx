import { useTranslation } from 'react-i18next';
import './Header.css';

const Header = () => {
	const { t, i18n } = useTranslation();
	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng);
	};

	return (
		<header className="header__container">
			<div
				style={{
					display: 'flex',
					gap: '10px',
				}}>
				<button onClick={() => changeLanguage('en')}>EN</button>
				<button onClick={() => changeLanguage('es')}>ES</button>
				<button onClick={() => changeLanguage('ru')}>RU</button>
			</div>
		</header>
	);
};

export default Header;
