import { Routes, Route } from 'react-router-dom';

import NotFoundPage from '../components/ErrorPage';
import Home from '../components/home/Home';

export default function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);
}
