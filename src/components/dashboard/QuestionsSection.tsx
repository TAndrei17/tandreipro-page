import { useTranslation } from 'react-i18next';

import './styles/Sections.css';
import QuestionAdminCard from './QuestionAdminCard';

import icons from '@constants/icons';
import { useAppDispatch, useAppSelector } from '@store/index';
import { questionsAdminSelectors } from '@store/questionsAdmin/selectors';
import deleteAllQuestions from '@utils/deleteAllQuestions';

const QuestionsSection = () => {
	const dispatch = useAppDispatch();
	const { t: tNav } = useTranslation('translation', { keyPrefix: 'dashboard.nav' });
	const { t: tQuestions } = useTranslation('translation', { keyPrefix: 'dashboard.questions' });
	const questionsAdmin = useAppSelector(questionsAdminSelectors.selectAll);

	const handleDeleteAll = async () => {
		await deleteAllQuestions(dispatch, tQuestions);
	};

	return (
		<section id={'questions'} className={'dashboard-section'}>
			<div className={'dashboard-section-content'}>
				<div className={'dashboard-section-header-container'}>
					<h2 className={'dashboard-section-header'}>{tNav('questions')}</h2>
					<div
						role="button"
						tabIndex={0}
						className="delete-questions-button"
						onClick={handleDeleteAll}
						onKeyDown={(e) => {
							if (e.key === 'Enter' || e.key === ' ') {
								e.preventDefault();
								handleDeleteAll();
							}
						}}>
						{tQuestions('deleteAll')}
						<img
							src={icons.deleteIcon}
							alt={'trash'}
							title={'trash'}
							className={'delete-questions-trash'}
						/>
					</div>
				</div>

				<div className={'dashboard-questions-container'}>
					{questionsAdmin.map((item) => {
						return <QuestionAdminCard key={item.id} question={item} />;
					})}
				</div>
			</div>
		</section>
	);
};

export default QuestionsSection;
