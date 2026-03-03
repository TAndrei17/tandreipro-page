import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import './styles/Sections.css';
import QuestionAdminCard from './QuestionAdminCard';

import ModalQuestionEdit from '@components/Modals/ModalQuestionEdit';
import icons from '@constants/icons';
import type { Question } from '@models/Question';
import { useAppDispatch, useAppSelector } from '@store/index';
import { questionsAdminSelectors } from '@store/questionsAdmin/selectors';
import createAlert from '@utils/createAlert';
import deleteAllQuestions from '@utils/deleteAllQuestions';

const QuestionsSection = () => {
	const dispatch = useAppDispatch();
	const { t: tNav } = useTranslation('translation', { keyPrefix: 'dashboard.nav' });
	const { t: tQuestions } = useTranslation('translation', { keyPrefix: 'dashboard.questions' });
	const questionsAdmin = useAppSelector(questionsAdminSelectors.selectAll);

	const [editingQuestion, setEditingQuestion] = useState<Question | null>(null);

	const handleDeleteAll = async () => {
		try {
			const result = await deleteAllQuestions(dispatch);

			if (result === 'fail') {
				throw new Error();
			}
			createAlert('success', tQuestions('deleteAllSuccess'));
		} catch {
			createAlert('error', tQuestions('deleteAllfail'));
		}
	};

	return (
		<>
			<section id={'questions'}>
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
							return (
								<QuestionAdminCard
									key={item.id}
									question={item}
									editQuestion={setEditingQuestion}
								/>
							);
						})}
					</div>
				</div>
			</section>

			{editingQuestion && (
				<ModalQuestionEdit question={editingQuestion} onClose={() => setEditingQuestion(null)} />
			)}
		</>
	);
};

export default QuestionsSection;
