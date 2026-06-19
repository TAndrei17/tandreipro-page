import React, { type Dispatch, type SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';

import icons from '@constants/icons';
import type { QuestionDeleteRequest } from '@models/questionsAdmin';
import { answersAdminSelectors } from '@store/answersAdmin/selectors';
import { deleteAnswerAdmin } from '@store/answersAdmin/service';
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
	createAnswer: Dispatch<SetStateAction<Question | null>>;
};

const QuestionAdminCard = ({ question, editQuestion, createAnswer }: QuestionCardProps) => {
	const dispatch = useAppDispatch();
	const { t } = useTranslation('translation', { keyPrefix: 'dashboard.questions' });
	const { t: tAnswers } = useTranslation('translation', { keyPrefix: 'dashboard.answers' });
	const tags = useAppSelector((state) => selectTagsByIds(state, question.tags));
	const answer = useAppSelector((state) =>
		answersAdminSelectors.selectAll(state).find((item) => item.question_id === question.id)
	);

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

	const handleDeleteAnswer = async (answerId: number) => {
		try {
			await dispatch(deleteAnswerAdmin({ id: answerId })).unwrap();
			createAlert('success', tAnswers('deleteAnswerSuccess'));
		} catch {
			createAlert('error', tAnswers('deleteAnswerFail'));
		}
	};

	return (
		<div className="question-card">
			<div className="question-header">
				<div className="question-header-left">
					<span className="question-id">#{question.id}</span>
					<div className="question-meta">
						<span className="question-name">{question.name}</span>
						{question.email && <span className="question-email">{question.email}</span>}
					</div>
				</div>
				<div className={'question-status-container'}>
					<span onClick={() => createAnswer(question)} className={'question-status pending'}>
						{t('answer')}
					</span>
					<span onClick={() => editQuestion(question)} className={'question-status pending'}>
						{t('edit')}
					</span>
					<span
						onClick={() => handleStatus(question.id, question.approved)}
						className={`question-status ${question.approved ? 'approved' : 'pending'}`}>
						{question.approved ? t('approved') : t('pending')}
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

			<div className="question-block">
				<div className="question-block-label">{tAnswers('question')}</div>
				<p className="question-block-content">{question.content}</p>
			</div>

			{answer && (
				<div className="question-block question-answer-block">
					<div className="question-block-label">{tAnswers('answer')}</div>
					<p className="question-block-content">{answer.content}</p>
					<button
						type="button"
						className="question-answer-delete"
						onClick={() => handleDeleteAnswer(answer.id)}
						title={tAnswers('deleteAnswerSuccess')}>
						<img src={icons.deleteIcon} alt="delete" />
					</button>
				</div>
			)}

			<div className="question-meta-row">
				<div className="question-tags">
					{tags.map((tag) => (
						<span key={tag.id} className="question-tag">
							#{tag.name}
						</span>
					))}
				</div>

				<div className="question-footer">{new Date(question.created_at).toLocaleString()}</div>
			</div>
		</div>
	);
};

export default React.memo(QuestionAdminCard);
