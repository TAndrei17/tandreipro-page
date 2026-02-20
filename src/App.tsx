import AppRoutes from '@routes/AppRoutes';
import Header from '@components/common/Header/Header';
import SettingsProvider from '@context/SettingsContext';
import { useEffect } from 'react';
import { startSite } from '@store/site/siteSlice';
import { useAppDispatch, useAppSelector } from '@store/index';

function App() {
	const dispatch = useAppDispatch();
	const status = useAppSelector((state) => state.site.status);

	useEffect(() => {
		if (status === 'idle') {
			dispatch(startSite());
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
