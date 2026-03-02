import { Formik, Form, Field } from 'formik';
import { useTranslation } from 'react-i18next';
import Modal from 'react-modal';
import type { Styles } from 'react-modal';

import type { Question } from '@models/Question';
import './styles/ModalQuestionElit.css';

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
	const { t: tForm } = useTranslation('translation', { keyPrefix: 'contact.form' });
	const { t: tModal } = useTranslation('translation', { keyPrefix: 'contact.modal' });
	const onSubmit = () => {};

	if (!question) {
		return null;
	}

	return (
		<Modal isOpen={question !== null} onRequestClose={onClose} style={customStyles}>
			<Formik<Question> initialValues={question} onSubmit={onSubmit}>
				{({ isSubmitting }) => (
					<Form className="modal-question-form">
						<section className="modal-question-header">
							<h2 className="modal-question-title">{tModal('editQuestion')}</h2>
						</section>

						<div className="modal-question-group">
							<label htmlFor="name">{tForm('name')}</label>
							<Field id="name" type="text" name="name" className="modal-question-input" />
						</div>

						<div className="modal-question-group">
							<label htmlFor="email">{tForm('email')}</label>
							<Field id="email" type="email" name="email" className="modal-question-input" />
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
