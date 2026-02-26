import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './styles/ContactPage.css';
import { Link } from 'react-router';

import ModalLogin from '@components/Modals/ModalLogIn';
import { useSiteHeaderHeight } from '@context/SettingsContext';

const DashboardPage = () => {
	const { siteHeaderHeight } = useSiteHeaderHeight();
	const { t, i18n } = useTranslation();
	const language = i18n.language;

	useEffect(() => {
		document.title = t('browserTabs.browserTabContact');
	}, [t, language]);

	return (
		<div style={{ paddingTop: siteHeaderHeight }}>
			<main>
				<section className="page-header">
					<h1>Дешборд</h1>
				</section>
			</main>

			<div className="legal-micro-link">
				<Link to="/legal">{t('legal.title')}</Link>
				<ModalLogin />
			</div>
		</div>
	);
};

export default DashboardPage;
