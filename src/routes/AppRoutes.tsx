import { lazy, type ReactElement } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';

import AdminRoute from '@components/common/AdminRoute';
import {
	DASHBOARD_PAGE_PATH,
	LEGACY_ABOUT_PAGE_PATH,
	LEGACY_CONTACT_PAGE_PATH,
	LEGACY_LEGAL_PAGE_PATH,
	LEGACY_QUESTIONS_PAGE_PATH,
	LEGACY_SERVICES_PAGE_PATH,
	PAGE_PATHS,
	type Language,
	type PublicPage,
} from '@constants/routes';
import AboutMePage from '@pages/AboutMePage';
import ContactPage from '@pages/ContactPage';
import HomePage from '@pages/HomePage';
import LegalPage from '@pages/LegalPage';
import NotFoundPage from '@pages/NotFoundPage';
import QuestionsPublicPage from '@pages/QuestionsPublic';
import ServicesPage from '@pages/ServicesPage';

// Protects the /dashboard route and lazy-loads the admin page for authorized users only
// The dashboard will not load until the user navigates to it
const DashboardPage = lazy(() => import('@pages/Dashboard'));

export default function AppRoutes() {
	const pageElements: Record<PublicPage, ReactElement> = {
		home: <HomePage />,
		services: <ServicesPage />,
		about: <AboutMePage />,
		contact: <ContactPage />,
		questions: <QuestionsPublicPage />,
		legal: <LegalPage />,
	};

	return (
		<Routes>
			{(Object.keys(PAGE_PATHS) as Language[]).flatMap((language) =>
				(Object.keys(PAGE_PATHS[language]) as PublicPage[]).map((page) => (
					<Route
						key={PAGE_PATHS[language][page]}
						path={PAGE_PATHS[language][page]}
						element={pageElements[page]}
					/>
				))
			)}

			<Route
				path={LEGACY_SERVICES_PAGE_PATH}
				element={<Navigate to={PAGE_PATHS.es.services} replace />}
			/>
			<Route
				path={LEGACY_ABOUT_PAGE_PATH}
				element={<Navigate to={PAGE_PATHS.es.about} replace />}
			/>
			<Route
				path={LEGACY_CONTACT_PAGE_PATH}
				element={<Navigate to={PAGE_PATHS.es.contact} replace />}
			/>
			<Route
				path={LEGACY_QUESTIONS_PAGE_PATH}
				element={<Navigate to={PAGE_PATHS.es.questions} replace />}
			/>
			<Route
				path={LEGACY_LEGAL_PAGE_PATH}
				element={<Navigate to={PAGE_PATHS.es.legal} replace />}
			/>
			<Route path="*" element={<NotFoundPage />} />

			<Route
				path={DASHBOARD_PAGE_PATH}
				element={
					<AdminRoute>
						<DashboardPage />
					</AdminRoute>
				}
			/>
		</Routes>
	);
}
