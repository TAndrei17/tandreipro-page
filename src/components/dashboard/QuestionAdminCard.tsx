import React, { type Dispatch, type SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';

import icons from '@constants/icons';
import type { QuestionDeleteRequest } from '@models/questionsAdmin';
import { useAppDispatch } from '@store/index';
import deleteQuestion from '@utils/deleteQuestion';
import updateQuestionStatus from '@utils/updateQuestion';
import type { Question } from 'models/Question';
import './styles/QuestionAdminCard.css';

type QuestionCardProps = {
	question: Question;
	editQuestion: Dispatch<SetStateAction<Question | null>>;
};

const QuestionAdminCard = ({ question, editQuestion }: QuestionCardProps) => {
	const dispatch = useAppDispatch();
	const { t } = useTranslation('translation', { keyPrefix: 'dashboard.questions' });

	const handleDelete = async (request: QuestionDeleteRequest) => {
		await deleteQuestion(request, dispatch, t);
	};

	const handleStatus = async (id: number, status: boolean) => {
		await updateQuestionStatus(id, status, dispatch, t);
	};

	return (
		<div className="question-card">
			<div className="question-header">
				<span className="question-id">#{question.id}</span>
				<div className={'question-status-container'}>
					<span onClick={() => editQuestion(question)} className={'question-status pending'}>
						{t('edit')}
					</span>
					<span
						onClick={() => handleStatus(question.id, question.approved)}
						className={`question-status ${question.approved ? 'approved' : 'pending'}`}>
						{question.approved ? 'Approved' : 'Pending'}
					</span>
					<span
						role="button"
						tabIndex={0}
						className="question-button"
						onClick={() => {
							handleDelete({ id: question.id });
						}}
						onKeyDown={(e) => {
							if (e.key === 'Enter' || e.key === ' ') {
								e.preventDefault();
								handleDelete({ id: question.id });
							}
						}}>
						<img
							src={icons.deleteIcon}
							alt={'trash'}
							title={'trash'}
							className={'question-trash'}
						/>
					</span>
				</div>
			</div>

			<h3 className="question-name">{question.name}</h3>

			{question.email && <p className="question-email">{question.email}</p>}

			<p className="question-content">{question.content}</p>

			{question.tags && question.tags.length > 0 && (
				<div className="question-tags">
					{question.tags.map((tag) => (
						<span key={tag} className="question-tag">
							#{tag}
						</span>
					))}
				</div>
			)}

			<div className="question-footer">{new Date(question.created_at).toLocaleString()}</div>
		</div>
	);
};

export default React.memo(QuestionAdminCard);
