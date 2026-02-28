import { useTranslation } from 'react-i18next';

import './styles/Sections.css';
import QuestionAdminCard from './QuestionAdminCard';

import { useAppSelector } from '@store/index';
import { questionsAdminSelectors } from '@store/questionsAdmin/selectors';

const QuestionsSection = () => {
	const { t: tNav } = useTranslation('translation', { keyPrefix: 'dashboard.nav' });
	const questionsAdmin = useAppSelector(questionsAdminSelectors.selectAll);
	console.log(questionsAdmin);

	return (
		<section id={tNav('questions')} className={'dashboard-section'}>
			<div className={'dashboard-section-content'}>
				<h2 className={'dashboard-section-header'}>{tNav('questions')}</h2>

				<div className={'dashboard-questions-container'}>
					{questionsAdmin.map((item) => {
						return (
							<QuestionAdminCard
								key={item.id}
								question={{
									id: item.id,
									name: item.name,
									email: item.email,
									content: item.content,
									approved: item.approved,
									tags: item.tags,
									created_at: item.created_at,
								}}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default QuestionsSection;
