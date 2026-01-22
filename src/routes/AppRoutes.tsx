import { Routes, Route } from 'react-router-dom';

import NotFoundPage from '@pages/NotFoundPage';
import HomePage from '@pages/HomePage';
import AboutMePage from '@pages/AboutMePage';
import ServicesPage from '@pages/ServicesPage';
import ContactPage from '@pages/ContactPage';
import LegalPage from '@pages/LegalPage';

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
