import icons from '@constants/icons';
import type { Question } from 'models/Question';
import './styles/QuestionAdminCard.css';

type QuestionCardProps = {
	question: Question;
};

const QuestionAdminCard = ({ question }: QuestionCardProps) => {
	return (
		<div className="question-card">
			<div className="question-header">
				<span className="question-id">#{question.id}</span>
				<div className={'question-status-container'}>
					<span className={`question-status ${question.approved ? 'approved' : 'pending'}`}>
						{question.approved ? 'Approved' : 'Pending'}
					</span>
					<img src={icons.deleteIcon} alt={'trash'} title={'trash'} className={'question-trash'} />
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
