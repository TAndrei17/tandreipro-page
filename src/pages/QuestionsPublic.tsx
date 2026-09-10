import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import QuestionPublicCard from '@components/questionsPublic/QuestionPublicCard';
import { LEGAL_PAGE_PATH } from '@constants/routes';
import { useSiteHeaderHeight } from '@context/SettingsContext';
import { useAppSelector } from '@store/index';
import { questionsPublicSelectors } from '@store/questionsPublic/selectors';

import './styles/CommonStyles.css';
import './styles/QuestionsPublic.css';

const QuestionsPublicPage = () => {
	const { t } = useTranslation();
	const { siteHeaderHeight } = useSiteHeaderHeight();

	const questions = useAppSelector(questionsPublicSelectors.selectAll);

	return (
		<div
			style={{
				paddingTop: siteHeaderHeight,
				minHeight: `calc(100vh - ${siteHeaderHeight}px)`,
				display: 'flex',
				flexDirection: 'column',
			}}>
			<main style={{ flex: 1 }}>
				<section className={'page-header'}>
					<h1>{t('appHeader.questionsPublic')}</h1>
				</section>

				<section className={'page-section'}>
					<div className="qp-questions-container">
						{questions.map((question) => (
							<QuestionPublicCard
								key={question.id}
								id={question.id}
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
				<Link to={LEGAL_PAGE_PATH}>{t('legal.title')}</Link>
			</div>
		</div>
	);
};

export default QuestionsPublicPage;
