import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router';
import './styles/NotFoundPage.css';
import { useEffect } from 'react';
import { Link } from 'react-router';

const NotFoundPage = () => {
	const { t } = useTranslation();

	useEffect(() => {
		document.title = t('browserTabs.browserTabPageNotFound');
	}, []);

	return (
		<div>
			<main className="not-found">
				<div className="not-found__code">
					<span>4</span>
					<span>0</span>
					<span>4</span>
				</div>

				<h1 className="not-found__title">{t('browserTabs.browserTabPageNotFound')}</h1>

				<p className="not-found__desc">{t('pageNotFoundDescription')}</p>

				<NavLink to="/" replace className="not-found__button">
					{t('toHome')}
				</NavLink>
			</main>

			<div className="legal-micro-link">
				<Link to="/legal">{t('legal.title')}</Link>
			</div>
		</div>
	);
};

export default NotFoundPage;
