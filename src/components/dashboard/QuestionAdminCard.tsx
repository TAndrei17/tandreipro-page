import React, { type Dispatch, type SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';

import icons from '@constants/icons';
import type { QuestionDeleteRequest } from '@models/questionsAdmin';
import { useAppDispatch, useAppSelector } from '@store/index';
import { selectTagsByIds } from '@store/tags/selectors';
import createAlert from '@utils/createAlert';
import deleteQuestion from '@utils/deleteQuestion';
import updateQuestionStatus from '@utils/updateQuestionStatus';
import type { Question } from 'models/Question';
import './styles/QuestionAdminCard.css';

type QuestionCardProps = {
	question: Question;
	editQuestion: Dispatch<SetStateAction<Question | null>>;
};

const QuestionAdminCard = ({ question, editQuestion }: QuestionCardProps) => {
	const dispatch = useAppDispatch();
	const { t } = useTranslation('translation', { keyPrefix: 'dashboard.questions' });
	const tags = useAppSelector((state) => selectTagsByIds(state, question.tags));

	const handleDelete = async (request: QuestionDeleteRequest) => {
		try {
			const result = await deleteQuestion(request, dispatch);

			if (result === 'fail') {
				throw new Error();
			}

			createAlert('success', t('deleteSuccess', { count: request.id }));
		} catch {
			createAlert('error', t('deleteFail', { count: request.id }));
		}
	};

	const handleStatus = async (id: number, status: boolean) => {
		try {
			const result = await updateQuestionStatus(id, status, dispatch);

			if (result === 'fail') {
				throw new Error();
			}

			createAlert(
				status ? 'info' : 'success',
				t(status ? 'updateStatusFalse' : 'updateStatusTrue', { count: id })
			);
		} catch {
			createAlert('error', t('updateStatusFail', { count: id }));
		}
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

			{tags && tags.length > 0 && (
				<div className="question-tags">
					{tags.map((tag) => (
						<span key={tag.id} className="question-tag">
							#{tag.name}
						</span>
					))}
				</div>
			)}

			<div className="question-footer">{new Date(question.created_at).toLocaleString()}</div>
		</div>
	);
};

export default React.memo(QuestionAdminCard);
