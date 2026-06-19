import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useTranslation } from 'react-i18next';
import Modal from 'react-modal';
import './styles/ModalWindow.css';

import type { Question } from '@models/Question';
import { postAnswerAdmin, getAnswersAdmin } from '@store/answersAdmin/service';
import { useAppDispatch } from '@store/index';
import createAlert from '@utils/createAlert';
import { createAnswerValidationSchema } from '@utils/validation/createAnswerValidation';

const customStyles = {
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
		borderRadius: '12px',
		background: 'linear-gradient(135deg, #3a3a3a, #7a7eff)',
	},
};

type ModalAnswerCreateProps = {
	question: Question | null;
	onClose: () => void;
};

const ModalCreateAnswer = ({ question, onClose }: ModalAnswerCreateProps) => {
	const dispatch = useAppDispatch();
	const { t } = useTranslation();
	const { t: tAnswers } = useTranslation('translation', { keyPrefix: 'dashboard.answers' });

	const initialValues: { question_id: number; content: string } = {
		question_id: question ? question.id : 0,
		content: '',
	};

	const onSubmit = async (
		values: { question_id: number; content: string },
		{ setSubmitting, resetForm }: any
	) => {
		try {
			await dispatch(postAnswerAdmin(values)).unwrap();
			// refresh answers list to ensure UI shows the latest data immediately
			await dispatch(getAnswersAdmin()).unwrap();
			createAlert('success', tAnswers('createAnswerSuccess'));
			resetForm();
		} catch {
			createAlert('error', tAnswers('createAnswerFail'));
		} finally {
			setSubmitting(false);
			onClose();
		}
	};

	const validationSchema = createAnswerValidationSchema(tAnswers);

	return (
		<>
			<Modal isOpen={question !== null} onRequestClose={onClose} style={customStyles}>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={onSubmit}>
					{({ isSubmitting }) => (
						<Form className="modal-window-form">
							<section className="page-header">
								<h2 className="modal-window-title">{tAnswers('answer')}</h2>
							</section>

							<div className="modal-window-question">
								<span className="modal-window-question-label">{tAnswers('question')}:</span>
								<p className="modal-window-question-text">{question?.content}</p>
							</div>

							<div className="modal-window-group">
								<label htmlFor="content">{tAnswers('answerLabel')}</label>
								<Field
									id="content"
									as="textarea"
									name="content"
									autoFocus
									className="modal-window-textarea"
								/>
								<ErrorMessage name="content" component="div">
									{(msg) => (
										<div className="modal-window-error" role="alert">
											{msg}
										</div>
									)}
								</ErrorMessage>
							</div>

							<div className="modal-question-actions">
								<button
									type="submit"
									className="modal-question-btn modal-question-btn--save"
									disabled={isSubmitting}>
									{tAnswers('answerSubmit')}
								</button>

								<button
									type="button"
									onClick={onClose}
									className="modal-question-btn modal-question-btn--cancel"
									disabled={isSubmitting}>
									{t('contact.form.cancel')}
								</button>
							</div>
						</Form>
					)}
				</Formik>
			</Modal>
		</>
	);
};

export default ModalCreateAnswer;

/* 
доработать: 
сейчас при повторном создании ответа на тот же вопрос в БД записывается новый ответ, а старый не удаляется. Нужно сделать так, чтобы при создании нового ответа на тот же вопрос старый удалялся.
нужно сделать в БД уникальным индекс по полю question_id в таблице answers, чтобы не было возможности создать несколько ответов на один вопрос.
нужно доработать логику на сервере, чтобы при создании нового ответа на вопрос, если уже существует ответ на этот вопрос, то старый удалялся, а новый создавался.
*/
