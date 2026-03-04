import { useTranslation } from 'react-i18next';

import { useAppSelector } from '@store/index';
import { selectTagsByIds } from '@store/tags/selectors';
import './QuestionPiblicCardStyles.css';

type QuestionCardProps = {
	name: string;
	content: string;
	created_at: string;
	tags?: number[];
};

const QuestionCard = ({ name, content, created_at, tags }: QuestionCardProps) => {
	const { t } = useTranslation('translation', { keyPrefix: 'dashboard.answers' });
	const questionTags = useAppSelector((state) => selectTagsByIds(state, tags));

	return (
		<div className="qp-card">
			<div className="qp-card-header">
				<div className="qp-card-name">{name}</div>
				<div className="qp-card-date">
					{new Date(created_at).toLocaleDateString(undefined, {
						year: 'numeric',
						month: 'short',
						day: 'numeric',
					})}
				</div>
			</div>

			<div className="qp-card-content">
				<div className="qp-card-answer-header">
					<span className="qp-card-answer-label">{t('question')}</span>
				</div>
				{content}
			</div>

			<div className="qp-card-answer">
				<div className="qp-card-answer-header">
					<span className="qp-card-answer-label">{t('answer')}</span>
				</div>

				<textarea className="qp-card-answer-textarea" value={''} readOnly rows={6} />
			</div>

			{tags && tags.length > 0 && (
				<div className="qp-card-tags">
					{questionTags.map((tag) => (
						<span key={tag.id} className="qp-card-tag">
							{`#${tag.name}`}
						</span>
					))}
				</div>
			)}
		</div>
	);
};

export default QuestionCard;
