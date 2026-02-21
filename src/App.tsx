import { useEffect } from 'react';

import Header from '@components/common/Header/Header';
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
			<Header />
			<AppRoutes />
		</SettingsProvider>
	);
}

export default App;
