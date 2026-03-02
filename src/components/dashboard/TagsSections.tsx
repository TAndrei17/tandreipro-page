import { useTranslation } from 'react-i18next';

import './styles/TagsSection.css';
import { useAppSelector } from '@store/index';
import { tagsSelectors } from '@store/tags/selectors';

const TagsSection = () => {
	const { t: tNav } = useTranslation('translation', { keyPrefix: 'dashboard.nav' });
	const { t: tTags } = useTranslation('translation', { keyPrefix: 'dashboard.tags' });
	const tags = useAppSelector(tagsSelectors.selectAll);

	return (
		<section id="tags">
			<div className="dashboard-section-content">
				{/* Header */}
				<div className="dashboard-section-header-container">
					<h2 className="dashboard-section-header">{tNav('tags')}</h2>

					<button className="create-tag-button">{`+ ${tTags('createTag')}`}</button>
				</div>

				{/* Tags list */}
				<div className="tags-list">
					{tags.map((tag) => (
						<div key={tag.id} className="tag-item">
							<span className="tag-name">{tag.name}</span>

							<button className="delete-tag-button" title={tTags('deleteTag')}>
								✕
							</button>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default TagsSection;
