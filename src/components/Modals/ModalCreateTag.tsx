import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Modal from 'react-modal';
import './styles/ModalWindow.css';

import { useAppDispatch } from '@store/index';
import { createTag } from '@store/tags/services';
import createAlert from '@utils/createAlert';
import { createTagsCreateValidationSchema } from '@utils/validation/createTagsCreateValidation';

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
		width: '50%',
		borderRadius: '12px',
		background: 'linear-gradient(135deg, #3a3a3a, #7a7eff)',
	},
};

const ModalCreateTag = () => {
	const dispatch = useAppDispatch();
	const { t: tTags } = useTranslation('translation', { keyPrefix: 'dashboard.tags' });

	const [isOpen, setIsOpen] = useState(false);

	const initialValues: { name: string } = {
		name: '',
	};

	const onSubmit = async (values: { name: string }, { setSubmitting, resetForm }: any) => {
		try {
			await dispatch(createTag(values)).unwrap();
			createAlert('success', tTags('createTagSuccess'));
			resetForm();
		} catch {
			createAlert('error', tTags('createTagFail'));
		} finally {
			setSubmitting(false);
			setIsOpen(false);
		}
	};

	const validationSchema = createTagsCreateValidationSchema(tTags);

	return (
		<>
			<button onClick={() => setIsOpen(true)} className="create-tag-button">
				{`+ ${tTags('createTag')}`}
			</button>

			<Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={customStyles}>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={onSubmit}>
					{({ isSubmitting }) => (
						<Form className="modal-window-form">
							<section className="page-header">
								<h2 className="modal-window-title">{tTags('createTag')}</h2>
							</section>

							<div className="modal-window-group">
								<label htmlFor="name">{tTags('tagLabel')}</label>
								<Field id="name" type="text" name="name" autoFocus className="modal-window-input" />
								<ErrorMessage name="name">
									{(msg) => (
										<div className="modal-window-error" role="alert">
											{msg}
										</div>
									)}
								</ErrorMessage>
							</div>

							<button type="submit" className="modal-window-submit" disabled={isSubmitting}>
								{tTags('tagSubmit')}
							</button>
						</Form>
					)}
				</Formik>
			</Modal>
		</>
	);
};

export default ModalCreateTag;
