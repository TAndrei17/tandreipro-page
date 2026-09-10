import { lazy } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';

import AdminRoute from '@components/common/AdminRoute';
import {
	ABOUT_PAGE_PATH,
	CONTACT_PAGE_PATH,
	DASHBOARD_PAGE_PATH,
	LEGAL_PAGE_PATH,
	LEGACY_ABOUT_PAGE_PATH,
	LEGACY_CONTACT_PAGE_PATH,
	LEGACY_LEGAL_PAGE_PATH,
	LEGACY_QUESTIONS_PAGE_PATH,
	LEGACY_SERVICES_PAGE_PATH,
	QUESTIONS_PAGE_PATH,
	SERVICES_PAGE_PATH,
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
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path={SERVICES_PAGE_PATH} element={<ServicesPage />} />
			<Route path={ABOUT_PAGE_PATH} element={<AboutMePage />} />
			<Route path={CONTACT_PAGE_PATH} element={<ContactPage />} />
			<Route path={QUESTIONS_PAGE_PATH} element={<QuestionsPublicPage />} />
			<Route path={LEGAL_PAGE_PATH} element={<LegalPage />} />

			<Route
				path={LEGACY_SERVICES_PAGE_PATH}
				element={<Navigate to={SERVICES_PAGE_PATH} replace />}
			/>
			<Route path={LEGACY_ABOUT_PAGE_PATH} element={<Navigate to={ABOUT_PAGE_PATH} replace />} />
			<Route
				path={LEGACY_CONTACT_PAGE_PATH}
				element={<Navigate to={CONTACT_PAGE_PATH} replace />}
			/>
			<Route
				path={LEGACY_QUESTIONS_PAGE_PATH}
				element={<Navigate to={QUESTIONS_PAGE_PATH} replace />}
			/>
			<Route path={LEGACY_LEGAL_PAGE_PATH} element={<Navigate to={LEGAL_PAGE_PATH} replace />} />
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
