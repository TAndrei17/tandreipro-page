import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import AdminRoute from '@components/common/AdminRoute';
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
			<Route path="/services" element={<ServicesPage />} />
			<Route path="/about" element={<AboutMePage />} />
			<Route path="/contact" element={<ContactPage />} />
			<Route path="/questionsPublic" element={<QuestionsPublicPage />} />
			<Route path="/legal" element={<LegalPage />} />
			<Route path="*" element={<NotFoundPage />} />

			<Route
				path="/dashboard"
				element={
					<AdminRoute>
						<DashboardPage />
					</AdminRoute>
				}
			/>
		</Routes>
	);
}
