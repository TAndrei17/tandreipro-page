import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router';
import './ErrorPage.css';

const NotFoundPage = () => {
	const { t } = useTranslation();

	return (
		<div className="container">
			<h1 className="notFoundPage__title">{t('pageNotFound')}</h1>
			<NavLink to={'/'} className={'notFoundPage__link'} replace>
				{t('toHome')}
			</NavLink>
		</div>
	);
};

export default NotFoundPage;
