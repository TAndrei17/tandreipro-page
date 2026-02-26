import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './styles/ContactPage.css';
import { Link } from 'react-router';

import ModalLogin from '@components/Modals/ModalLogIn';
import { useSiteHeaderHeight } from '@context/SettingsContext';
import './styles/Dashboard.css';

const DashboardPage = () => {
	const { siteHeaderHeight } = useSiteHeaderHeight();
	const { t, i18n } = useTranslation();
	const language = i18n.language;

	const [active, setActive] = useState<string>('admin');

	useEffect(() => {
		document.title = t('browserTabs.browserTabDashboard');
	}, [t, language]);

	const setActiveTab = (tab: string) => {
		setActive(tab);
	};

	return (
		<div style={{ paddingTop: siteHeaderHeight }}>
			<section className="page-header">
				<h1>{t('appHeader.dashboard')}</h1>
			</section>

			<div className="dashboard-layout">
				<nav className="sidebar" style={{ top: siteHeaderHeight }}>
					<ul>
						<li>
							<a
								href="#admin"
								onClick={() => setActiveTab('admin')}
								className={active === 'admin' ? 'active' : ''}>
								Admin
							</a>
						</li>
						<li>
							<a
								href="#questions"
								onClick={() => setActiveTab('questions')}
								className={active === 'questions' ? 'active' : ''}>
								Questions
							</a>
						</li>
						<li>
							<a
								href="#tags"
								onClick={() => setActiveTab('tags')}
								className={active === 'tags' ? 'active' : ''}>
								Tags
							</a>
						</li>
					</ul>
				</nav>

				<main className="content">
					<section id="admin">
						<h1>Admin</h1>
					</section>
					<section id="questions">
						<h1>Questions</h1>
					</section>
					<section id="tags">
						<h1>Tags</h1>
					</section>
				</main>
			</div>

			<div className="legal-micro-link">
				<Link to="/legal">{t('legal.title')}</Link>
				<ModalLogin />
			</div>
		</div>
	);
};

export default DashboardPage;
