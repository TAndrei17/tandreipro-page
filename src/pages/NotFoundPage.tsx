import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router';
import './styles/NotFoundPage.css';
import { Link } from 'react-router-dom';

import { LEGAL_PAGE_PATH } from '@constants/routes';
import useLocalizedPath from '@hooks/useLocalizedPath';

const NotFoundPage = () => {
	const { t } = useTranslation();
	const localizedPath = useLocalizedPath();

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

				<NavLink to={localizedPath('/')} replace className="not-found__button">
					{t('toHome')}
				</NavLink>
			</main>

			<div className="legal-micro-link">
				<Link to={localizedPath(LEGAL_PAGE_PATH)}>{t('legal.title')}</Link>
			</div>
		</div>
	);
};

export default NotFoundPage;
