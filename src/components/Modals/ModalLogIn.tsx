import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useTranslation } from 'react-i18next';
import Modal from 'react-modal';
import './ModalLogin.css';

import useDeviceType from '@hooks/useDeviceType';
import type { AuthRequest } from '@models/Auth';
import createAlert from '@utils/createAlert';
import { createLoginValidationSchema } from '@utils/validation/createLoginFormValidation';

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
		borderRadius: '6px',
		background: 'linear-gradient(135deg, #3a3a3a, #7a7eff)',
	},
};

const ENV_DEV = import.meta.env.DEV;
const SITE_KEY = ENV_DEV
	? (import.meta.env.VITE_SITE_KEY_DEV as string)
	: (import.meta.env.VITE_SITE_KEY as string);

const ModalLogin = () => {
	const { t: tModal, i18n } = useTranslation('translation', { keyPrefix: 'contact.modal' });
	const { t: tForm } = useTranslation('translation', { keyPrefix: 'contact.form' });
	const { t: tErrors } = useTranslation('translation', { keyPrefix: 'contact.errors' });
	const lng = i18n.language;

	const recaptchaRef = useRef<ReCAPTCHA>(null);
	const { isMobile } = useDeviceType();

	const [showCaptcha, setShowCaptcha] = useState(false);
	const [captchaValue, setCaptchaValue] = useState<string | null>(null);
	const [isOpen, setIsOpen] = useState(false);

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
			createAlert('success', tForm('loginSuccess'));
			resetForm();
		} catch {
			createAlert('error', tErrors('loginFail'));
		} finally {
			setSubmitting(false);
			recaptchaRef.current?.reset();
			setCaptchaValue(null);
			setShowCaptcha(false);
		}
	};

	const validationSchema = createLoginValidationSchema(tErrors);

	return (
		<>
			<span className="modal-login-link" onClick={() => setIsOpen(true)}>
				{tModal('login')}
			</span>

			<Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={customStyles}>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={onSubmit}>
					{({ isSubmitting }) => (
						<Form className="modal-login-form">
							<section className="page-header">
								<h2 className="modal-login-title">{tModal('login')}</h2>
							</section>

							<div className="modal-login-group">
								<label htmlFor="email">{tForm('email')}</label>
								<Field id="email" type="email" name="email" className="modal-login-input" />
								<ErrorMessage name="email">
									{(msg) => (
										<div className="modal-login-error" role="alert">
											{msg}
										</div>
									)}
								</ErrorMessage>
							</div>

							<div className="modal-login-group">
								<label htmlFor="password">{tForm('password')}</label>
								<Field
									id="password"
									type="password"
									name="password"
									className="modal-login-input"
								/>
								<ErrorMessage name="password">
									{(msg) => (
										<div className="modal-login-error" role="alert">
											{msg}
										</div>
									)}
								</ErrorMessage>
							</div>

							<button type="submit" className="modal-login-submit" disabled={isSubmitting}>
								{showCaptcha ? tForm('submit') : tForm('check')}
							</button>

							<div className="modal-login-group">
								{showCaptcha && (
									<ReCAPTCHA
										key={lng}
										ref={recaptchaRef}
										sitekey={SITE_KEY}
										size={isMobile ? 'compact' : 'normal'}
										hl={lng}
										badge="bottomleft"
										onChange={handleCaptchaChange}
									/>
								)}
							</div>
						</Form>
					)}
				</Formik>
			</Modal>
		</>
	);
};

export default ModalLogin;
