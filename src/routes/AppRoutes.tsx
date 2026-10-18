import { lazy, Suspense, type ComponentType, type LazyExoticComponent } from 'react';
import { useTranslation } from 'react-i18next';
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
	getLanguageFromPath,
	type Language,
	type PublicPage,
} from '@constants/routes';
import { loadServiceResources } from '@localization/index';
import NotFoundPage from '@pages/NotFoundPage';

const pageComponents: Record<PublicPage, LazyExoticComponent<ComponentType>> = {
	home: lazy(() => import('@pages/HomePage')),
	services: lazy(async () => {
		const language = getLanguageFromPath(window.location.pathname);
		const [page] = await Promise.all([
			import('@pages/ServicesPage'),
			loadServiceResources(language),
		]);
		return page;
	}),
	about: lazy(() => import('@pages/AboutMePage')),
	contact: lazy(() => import('@pages/ContactPage')),
	questions: lazy(() => import('@pages/QuestionsPublic')),
	legal: lazy(() => import('@pages/LegalPage')),
};

const DashboardPage = lazy(() => import('@pages/Dashboard'));

export default function AppRoutes() {
	const { t } = useTranslation();

	return (
		<Suspense fallback={<div role="status">{t('loading')}</div>}>
			<Routes>
				{(Object.keys(PAGE_PATHS) as Language[]).flatMap((language) =>
					(Object.keys(PAGE_PATHS[language]) as PublicPage[]).map((page) => {
						const Page = pageComponents[page];
						return (
							<Route
								key={PAGE_PATHS[language][page]}
								path={PAGE_PATHS[language][page]}
								element={<Page />}
							/>
						);
					})
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
		</Suspense>
	);
}
