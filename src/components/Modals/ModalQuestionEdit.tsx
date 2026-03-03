import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useTranslation } from 'react-i18next';
import Modal from 'react-modal';
import type { Styles } from 'react-modal';

import type { Question } from '@models/Question';
import './styles/ModalQuestionEdit.css';
import { useAppDispatch, useAppSelector } from '@store/index';
import { tagsSelectors } from '@store/tags/selectors';
import createAlert from '@utils/createAlert';
import updateQuestionData from '@utils/updateQuestionData';
import { createUpdateQuestionValidationSchema } from '@utils/validation/createUpdateQuestionValidation';

const customStyles: Styles = {
	overlay: {
		backgroundColor: 'rgba(0,0,0,0.5)',
		zIndex: 2000,
	},

	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		width: '80%',
		maxHeight: '80vh',
		overflowY: 'auto',

		borderRadius: '6px',
		background: 'linear-gradient(135deg, #3a3a3a, #7a7eff)',
	},
};

type ModalQuestionEditProps = {
	question: Question | null;
	onClose: () => void;
};

const ModalQuestionEdit = ({ question, onClose }: ModalQuestionEditProps) => {
	const dispatch = useAppDispatch();
	const { t: tForm } = useTranslation('translation', { keyPrefix: 'contact.form' });
	const { t: tModal } = useTranslation('translation', { keyPrefix: 'contact.modal' });
	const { t: tDashboard } = useTranslation('translation', { keyPrefix: 'dashboard.questions' });
	const { t: tvalidation } = useTranslation('translation', { keyPrefix: 'contact.errors' });

	const tags = useAppSelector(tagsSelectors.selectAll);

	if (!question) {
		return null;
	}

	const validationSchema = createUpdateQuestionValidationSchema(tvalidation);

	const onSubmit = async (values: Question, { setSubmitting }: any) => {
		try {
			const result = await updateQuestionData(question.id, question, values, dispatch);

			switch (result) {
				case 'success':
					createAlert('success', tDashboard('updateDataTrue', { count: values.id }));
					onClose();
					return;
				case 'noChanges':
					createAlert('info', tDashboard('nothingChanged'));
					return;
				case 'fail':
					throw new Error();
			}
		} catch {
			createAlert('error', tDashboard('updateDataFail', { count: values.id }));
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<Modal isOpen={question !== null} onRequestClose={onClose} style={customStyles}>
			<Formik<Question>
				initialValues={{
					...question,
					tags: question.tags || [],
				}}
				validationSchema={validationSchema}
				onSubmit={(values, setSubmitting) => {
					onSubmit(values, setSubmitting);
				}}>
				{({ isSubmitting }) => (
					<Form className="modal-question-form">
						<section className="modal-question-header">
							<h2 className="modal-question-title">{tModal('editQuestion')}</h2>
						</section>

						<div className="modal-question-group">
							<label htmlFor="name">{tForm('name')}</label>
							<Field id="name" type="text" name="name" className="modal-question-input" />
							<ErrorMessage name="name">
								{(msg) => (
									<div className="form-error" role="alert">
										{msg}
									</div>
								)}
							</ErrorMessage>
						</div>

						<div className="modal-question-group">
							<label htmlFor="email">{tForm('email')}</label>
							<Field id="email" type="email" name="email" className="modal-question-input" />
							<ErrorMessage name="email">
								{(msg) => (
									<div className="form-error" role="alert">
										{msg}
									</div>
								)}
							</ErrorMessage>
						</div>

						<div className="modal-question-group">
							<label htmlFor="content">{tForm('question')}</label>
							<Field
								id="content"
								as="textarea"
								name="content"
								className="modal-question-textarea"
								rows={12}
							/>
							<ErrorMessage name="content">
								{(msg) => (
									<div className="form-error" role="alert">
										{msg}
									</div>
								)}
							</ErrorMessage>
						</div>

						<div className="modal-question-group">
							<label>{tDashboard('addRemoveTags')}</label>

							<div className="modal-question-tags">
								{tags.map((tag) => (
									<label key={tag.id} className="modal-question-tag-item">
										<Field name="tags">
											{({ field, form }: any) => {
												const selectedTags: number[] = field.value || [];
												const isChecked = selectedTags.includes(tag.id);

												const toggleTag = () => {
													if (isChecked) {
														form.setFieldValue(
															'tags',
															selectedTags.filter((id) => id !== tag.id)
														);
													} else {
														form.setFieldValue('tags', [...selectedTags, tag.id]);
													}
												};

												return <input type="checkbox" checked={isChecked} onChange={toggleTag} />;
											}}
										</Field>

										<span>{tag.name}</span>
									</label>
								))}
							</div>
						</div>

						<div className="modal-question-actions">
							<button
								type="submit"
								className="modal-question-btn modal-question-btn--save"
								disabled={isSubmitting}>
								{tForm('save')}
							</button>

							<button
								type="button"
								onClick={onClose}
								className="modal-question-btn modal-question-btn--cancel"
								disabled={isSubmitting}>
								{tForm('cancel')}
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</Modal>
	);
};

export default ModalQuestionEdit;
