import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router';
import './styles/NotFoundPage.css';
import { useEffect } from 'react';

const NotFoundPage = () => {
	const { t } = useTranslation();

	useEffect(() => {
		document.title = t('pageNotFound');
	}, []);

	return (
		<main className="not-found">
			<div className="not-found__code">
				<span>4</span>
				<span>0</span>
				<span>4</span>
			</div>

			<h1 className="not-found__title">{t('pageNotFound')}</h1>

			<p className="not-found__desc">{t('pageNotFoundDescription')}</p>

			<NavLink to="/" className="not-found__button">
				{t('toHome')}
			</NavLink>
		</main>
	);
};

export default NotFoundPage;
