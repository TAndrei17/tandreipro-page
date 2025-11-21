import { Routes, Route } from 'react-router-dom';

import NotFoundPage from '../pages/NotFoundPage';
import HomePage from '../pages/HomePage';

export default function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);
}
