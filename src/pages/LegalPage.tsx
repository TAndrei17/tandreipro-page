import { useTranslation } from 'react-i18next';
import './styles/ContactPage.css';
import Markdown from 'react-markdown';

import { useSiteHeaderHeight } from '@context/SettingsContext';

const LegalPage = () => {
	const { siteHeaderHeight } = useSiteHeaderHeight();
	const { t } = useTranslation();

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
								a: ({ ...props }) => <a {...props} target="_blank" rel="noopener noreferrer" />,
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
