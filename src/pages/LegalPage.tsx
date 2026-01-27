import { useSiteHeaderHeight } from '@context/SettingsContext';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './styles/ContactPage.css';
import Markdown from 'react-markdown';

const LegalPage = () => {
	const { siteHeaderHeight } = useSiteHeaderHeight();
	const { t, i18n } = useTranslation();
	const language = i18n.language;

	useEffect(() => {
		document.title = t('browserTabs.browserTabLegal');
	}, [t, language]);

	return (
		<div style={{ paddingTop: siteHeaderHeight }}>
			<main>
				<section className="page-header">
					<h1>{t('legal.title')}</h1>
				</section>

				<section className="page-section">
					<div className="service-article">
						<Markdown
							components={{
								a: ({ node, ...props }) => (
									<a {...props} target="_blank" rel="noopener noreferrer" />
								),
							}}>
							{t('legal.terms')}
						</Markdown>
					</div>
				</section>
			</main>
		</div>
	);
};

export default LegalPage;
