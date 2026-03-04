import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import QuestionPublicCard from '@components/questionsPublic/QuestionPublicCard';
import { useSiteHeaderHeight } from '@context/SettingsContext';
import { useAppSelector } from '@store/index';
import { questionsPublicSelectors } from '@store/questionsPublic/selectors';

import './styles/CommonStyles.css';
import './styles/QuestionsPublic.css';

const QuestionsPublicPage = () => {
	const { t, i18n } = useTranslation();
	const language = i18n.language;
	const { siteHeaderHeight } = useSiteHeaderHeight();

	const questions = useAppSelector(questionsPublicSelectors.selectAll);

	useEffect(() => {
		document.title = t('browserTabs.browserTabQuestionsPublic');
	}, [t, language]);

	return (
		<div style={{ paddingTop: siteHeaderHeight }}>
			<main>
				<section className={'page-header'}>
					<h1>{t('appHeader.questionsPublic')}</h1>
				</section>

				<section className={'page-section'}>
					<div className="qp-questions-container">
						{questions.map((question) => (
							<QuestionPublicCard
								key={question.id}
								name={question.name}
								content={question.content}
								created_at={question.created_at}
								tags={question.tags}
							/>
						))}
					</div>
				</section>
			</main>

			<div className="legal-micro-link">
				<Link to="/legal">{t('legal.title')}</Link>
			</div>
		</div>
	);
};

export default QuestionsPublicPage;
