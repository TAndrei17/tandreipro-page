import { Formik, Form, Field, ErrorMessage } from 'formik';
import { lazy, Suspense, useRef, useState } from 'react';
import type ReCAPTCHAType from 'react-google-recaptcha';
import { useTranslation } from 'react-i18next';
import Modal from 'react-modal';
import type { Styles } from 'react-modal';
import './styles/ModalWindow.css';
import { useNavigate } from 'react-router-dom';

import { DASHBOARD_PAGE_PATH } from '@constants/routes';
import useDeviceType from '@hooks/useDeviceType';
import type { AuthRequest } from '@models/Auth';
import { useAppDispatch } from '@store/index';
import { login } from '@store/user/services';
import createAlert from '@utils/createAlert';
import { createLoginValidationSchema } from '@utils/validation/createLoginFormValidation';

const ReCAPTCHA = lazy(() => import('react-google-recaptcha'));

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

const ENV_DEV = import.meta.env.VITE_APP_ENV === 'development';

const SITE_KEY = ENV_DEV
	? (import.meta.env.VITE_SITE_KEY_DEV as string)
	: (import.meta.env.VITE_SITE_KEY as string);

type LoginFormModalProps = {
	onClose: () => void;
};

const LoginFormModal = ({ onClose }: LoginFormModalProps) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { t: tModal, i18n } = useTranslation('translation', { keyPrefix: 'contact.modal' });
	const { t: tForm } = useTranslation('translation', { keyPrefix: 'contact.form' });
	const { t: tErrors } = useTranslation('translation', { keyPrefix: 'contact.errors' });
	const lng = i18n.language;

	const recaptchaRef = useRef<ReCAPTCHAType>(null);
	const { isMobile } = useDeviceType();

	const [showCaptcha, setShowCaptcha] = useState(false);
	const [captchaValue, setCaptchaValue] = useState<string | null>(null);

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
		captchaToken: null,
	};

	const handleCaptchaChange = (value: string | null) => {
		setCaptchaValue(value);
	};

	const onSubmit = async (values: AuthRequest, { setSubmitting, resetForm }: any) => {
		if (!captchaValue) {
			setShowCaptcha(true);
			return;
		}

		try {
			await dispatch(
				login({
					...values,
					captchaToken: captchaValue,
				})
			).unwrap();
			createAlert('success', tForm('loginSuccess'));
			resetForm();

			navigate(DASHBOARD_PAGE_PATH);
		} catch {
			createAlert('error', tErrors('loginFail'));
		} finally {
			setSubmitting(false);
			recaptchaRef.current?.reset();
			setCaptchaValue(null);
			setShowCaptcha(false);
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

						<button type="submit" className="modal-window-submit" disabled={isSubmitting}>
							{showCaptcha ? tForm('submit') : tForm('check')}
						</button>

						<div className="modal-window-group">
							{showCaptcha && (
								<Suspense fallback={null}>
									<ReCAPTCHA
										key={lng}
										ref={recaptchaRef}
										sitekey={SITE_KEY}
										size={isMobile ? 'compact' : 'normal'}
										hl={lng}
										badge="bottomleft"
										onChange={handleCaptchaChange}
									/>
								</Suspense>
							)}
						</div>
					</Form>
				)}
			</Formik>
		</Modal>
	);
};

export default LoginFormModal;
