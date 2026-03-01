import { useTranslation } from 'react-i18next';

import icons from '@constants/icons';
import type { QuestionDeleteRequest } from '@models/questionsAdmin';
import { useAppDispatch } from '@store/index';
import { deleteQuestionAdmin } from '@store/questionsAdmin/services';
import createAlert from '@utils/createAlert';
import type { Question } from 'models/Question';

import './styles/QuestionAdminCard.css';

type QuestionCardProps = {
	question: Question;
};

const QuestionAdminCard = ({ question }: QuestionCardProps) => {
	const dispatch = useAppDispatch();
	const { t } = useTranslation('translation', { keyPrefix: 'dashboard.questions' });

	const deleteQuestion = async (request: QuestionDeleteRequest): Promise<void> => {
		const id = request.id;
		try {
			await dispatch(deleteQuestionAdmin(request));
			createAlert('success', t('deleteSuccess', { count: id }));
		} catch {
			createAlert('error', t('deleteFail', { count: id }));
		}
	};

	return (
		<div className="question-card">
			<div className="question-header">
				<span className="question-id">#{question.id}</span>
				<div className={'question-status-container'}>
					<span className={`question-status ${question.approved ? 'approved' : 'pending'}`}>
						{question.approved ? 'Approved' : 'Pending'}
					</span>
					<span
						role="button"
						tabIndex={0}
						className="question-button"
						onClick={() => {
							deleteQuestion({ id: question.id });
						}}
						onKeyDown={(e) => {
							if (e.key === 'Enter' || e.key === ' ') {
								e.preventDefault();
								deleteQuestion({ id: question.id });
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

export default QuestionAdminCard;
