import { Routes, Route } from 'react-router-dom';

import AboutMePage from '@pages/AboutMePage';
import ContactPage from '@pages/ContactPage';
import HomePage from '@pages/HomePage';
import LegalPage from '@pages/LegalPage';
import NotFoundPage from '@pages/NotFoundPage';
import ServicesPage from '@pages/ServicesPage';

export default function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/services" element={<ServicesPage />} />
			<Route path="/about" element={<AboutMePage />} />
			<Route path="/contact" element={<ContactPage />} />
			<Route path="/legal" element={<LegalPage />} />
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);
}
