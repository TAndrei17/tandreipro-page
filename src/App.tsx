import i18nInit from '@localization/index';
import AppRoutes from '@routes/AppRoutes';
import Header from '@components/common/Header/Header';
import SettingsProvider from '@context/SettingsContext';

i18nInit();

function App() {
	return (
		<SettingsProvider>
			<Header />
			<AppRoutes />
		</SettingsProvider>
	);
}

export default App;
