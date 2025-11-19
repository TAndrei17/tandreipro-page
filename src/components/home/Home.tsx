import { useTranslation } from 'react-i18next';

import '../../App.css';
import { useEffect } from 'react';

const Home = () => {
	const { t, i18n } = useTranslation();
	const language = i18n.language;

	useEffect(() => {
		document.title = t('browserTabDefault');
	}, [t, language]);

	return (
		<div style={{ paddingTop: 140 }}>
			<h1 style={{ color: 'white' }}>Vite + React in {language.toUpperCase()}</h1>
		</div>
	);
};

export default Home;
