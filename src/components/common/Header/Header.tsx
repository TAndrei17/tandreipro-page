// import { useTranslation } from 'react-i18next';
import './Header.css';
import Languages from './Languages';

const Header = () => {
	// const { t, i18n } = useTranslation();

	return (
		<header className="header__container">
			<Languages />
		</header>
	);
};

export default Header;
