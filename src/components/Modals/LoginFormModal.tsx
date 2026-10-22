import type { TurnstileInstance } from '@marsidev/react-turnstile';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Modal from 'react-modal';
import type { Styles } from 'react-modal';
import './styles/ModalWindow.css';
import { useNavigate } from 'react-router-dom';

import TurnstileWidget from '@components/common/UI/TurnstileWidget';
import { DASHBOARD_PAGE_PATH } from '@constants/routes';
import useDeviceType from '@hooks/useDeviceType';
import type { AuthRequest } from '@models/Auth';
import { useAppDispatch } from '@store/index';
import { login } from '@store/user/services';
import createAlert from '@utils/createAlert';
import { createLoginValidationSchema } from '@utils/validation/createLoginFormValidation';

Modal.setAppElement('#root');

const customStyles: Styles = {
	overlay: {
		backgroundColor: 'rgba(15, 23, 42, 0.4)',
		backdropFilter: 'blur(4px)',
		zIndex: 2000,
	},

	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		width: '100%',
		maxWidth: '420px',
		padding: '32px',
		border: '1px solid #E2E8F0',
		borderRadius: '16px',
		background: '#FFFFFF',
		boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
		position: 'relative',
	},
};

type LoginFormModalProps = {
	onClose: () => void;
};

const LoginFormModal = ({ onClose }: LoginFormModalProps) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { t: tModal } = useTranslation('translation', { keyPrefix: 'contact.modal' });
	const { t: tForm } = useTranslation('translation', { keyPrefix: 'contact.form' });
	const { t: tErrors } = useTranslation('translation', { keyPrefix: 'contact.errors' });

	const turnstileRef = useRef<TurnstileInstance>(null);
	const { isMobile } = useDeviceType();

	const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

	const modalStyles = {
		overlay: customStyles.overlay,
		content: {
			...customStyles.content,
			width: isMobile ? '80%' : '50%',
		},
	};

	const initialValues: AuthRequest = {
		email: '',
		password: '',
		turnstileToken: null,
	};

	const onSubmit = async (values: AuthRequest, { setSubmitting, resetForm }: any) => {
		if (!turnstileToken) {
			return;
		}

		try {
			await dispatch(
				login({
					...values,
					turnstileToken,
				})
			).unwrap();
			createAlert('success', tForm('loginSuccess'));
			resetForm();

			navigate(DASHBOARD_PAGE_PATH);
		} catch {
			createAlert('error', tErrors('loginFail'));
		} finally {
			setSubmitting(false);
			turnstileRef.current?.reset();
			setTurnstileToken(null);
			onClose();
		}
	};

	const validationSchema = createLoginValidationSchema(tErrors);

	return (
		<Modal isOpen onRequestClose={onClose} style={modalStyles}>
			<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
				{({ isSubmitting }) => (
					<Form className="modal-window-form modal-login-form">
						<button
							type="button"
							className="modal-close-btn"
							aria-label={tModal('login')}
							onClick={onClose}>
							×
						</button>
						<section className="page-header">
							<h2 className="modal-window-title">{tModal('login')}</h2>
						</section>

						<div className="modal-window-group">
							<label htmlFor="email">{tForm('email')}</label>
							<Field
								id="email"
								type="email"
								name="email"
								autoFocus
								className="modal-window-input"
							/>
							<ErrorMessage name="email">
								{(msg) => (
									<div className="modal-window-error" role="alert">
										{msg}
									</div>
								)}
							</ErrorMessage>
						</div>

						<div className="modal-window-group">
							<label htmlFor="password">{tForm('password')}</label>
							<Field id="password" type="password" name="password" className="modal-window-input" />
							<ErrorMessage name="password">
								{(msg) => (
									<div className="modal-window-error" role="alert">
										{msg}
									</div>
								)}
							</ErrorMessage>
						</div>

						<div className="modal-window-group">
							<TurnstileWidget
								ref={turnstileRef}
								onTokenChange={setTurnstileToken}
								compact={isMobile}
							/>
						</div>

						<button
							type="submit"
							className="modal-window-submit"
							disabled={isSubmitting || !turnstileToken}>
							{tForm('submit')}
						</button>
					</Form>
				)}
			</Formik>
		</Modal>
	);
};

export default LoginFormModal;
