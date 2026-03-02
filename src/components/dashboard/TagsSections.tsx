import { useTranslation } from 'react-i18next';

import './styles/TagsSection.css';
import ModalCreateTag from '@components/Modals/ModalCreateTag';
import { useAppDispatch, useAppSelector } from '@store/index';
import { tagsSelectors } from '@store/tags/selectors';
import { deleteTag } from '@store/tags/services';
import createAlert from '@utils/createAlert';

const TagsSection = () => {
	const dispatch = useAppDispatch();
	const { t: tNav } = useTranslation('translation', { keyPrefix: 'dashboard.nav' });
	const { t: tTags } = useTranslation('translation', { keyPrefix: 'dashboard.tags' });
	const tags = useAppSelector(tagsSelectors.selectAll);

	const handleDeletingTag = async ({ id }: { id: number }) => {
		try {
			await dispatch(deleteTag({ id }));
			createAlert('success', tTags('deleteTagSuccess'));
		} catch {
			createAlert('error', tTags('deleteTagFail'));
		}
	};

	return (
		<section id="tags">
			<div className="dashboard-section-content">
				{/* Header */}
				<div className="dashboard-section-header-container">
					<h2 className="dashboard-section-header">{tNav('tags')}</h2>

					<ModalCreateTag />
				</div>

				{/* Tags list */}
				<div className="tags-list">
					{tags.map((tag) => (
						<div key={tag.id} className="tag-item">
							<span className="tag-name">{tag.name}</span>

							<button
								onClick={() => handleDeletingTag({ id: tag.id })}
								className="delete-tag-button"
								title={tTags('deleteTag')}>
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
