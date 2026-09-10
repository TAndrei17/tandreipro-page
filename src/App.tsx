import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

import Header from '@components/common/Header/Header';
import SeoMetadata from '@components/common/SeoMetadata';
import SettingsProvider from '@context/SettingsContext';
import AppRoutes from '@routes/AppRoutes';
import { startApp } from '@store/app/appSlice';
import { useAppDispatch, useAppSelector } from '@store/index';

function App() {
	const dispatch = useAppDispatch();
	const status = useAppSelector((state) => state.app.status);

	useEffect(() => {
		if (status === 'idle') {
			dispatch(startApp());
		}
	}, []);

	return (
		<SettingsProvider>
			<SeoMetadata />
			<Header />
			<AppRoutes />
			<ToastContainer />
		</SettingsProvider>
	);
}

export default App;
