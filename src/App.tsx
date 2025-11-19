import './App.css';
import i18nInit from '@localization/index';
import AppRoutes from '@routes/AppRoutes';
import Header from '@components/common/Header';

i18nInit();

function App() {
	return (
		<>
			<Header />
			<AppRoutes />
		</>
	);
}

export default App;
