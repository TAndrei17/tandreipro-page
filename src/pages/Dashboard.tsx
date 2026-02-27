import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './styles/ContactPage.css';

import AdminSection from '@components/dashboard/AdminSection';
import DashboardNav from '@components/dashboard/DashboardNav';
import QuestionsSection from '@components/dashboard/QuestionsSection';
import TagsSection from '@components/dashboard/TagsSections';
import { useSiteHeaderHeight } from '@context/SettingsContext';
import './styles/Dashboard.css';

const DashboardPage = () => {
	const { siteHeaderHeight } = useSiteHeaderHeight();
	const { t, i18n } = useTranslation();
	const language = i18n.language;

	const [active, setActive] = useState<number>(0);

	useEffect(() => {
		document.title = t('browserTabs.browserTabDashboard');
	}, [t, language]);

	const sections = [
		{ component: <AdminSection /> },
		{ component: <QuestionsSection /> },
		{ component: <TagsSection /> },
	];

	return (
		<div style={{ paddingTop: siteHeaderHeight }}>
			<div className="dashboard-layout">
				<DashboardNav active={active} setActive={setActive} />

				<main className="content">
					{sections.map((section, index) => {
						if (index === active) {
							return <div key={index}>{section.component}</div>;
						}
						return <></>;
					})}
				</main>
			</div>
		</div>
	);
};

export default DashboardPage;
