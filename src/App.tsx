import './App.css';
import i18nInit from '@localization/index';
import AppRoutes from '@routes/AppRoutes';

i18nInit();

function App() {
	return (
		<>
			<AppRoutes />
		</>
	);
}

export default App;
