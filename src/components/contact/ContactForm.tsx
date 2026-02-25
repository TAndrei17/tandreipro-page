import { Form, Formik, Field, ErrorMessage } from 'formik';
import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useTranslation } from 'react-i18next';

import type { QuestionUserRequest } from '@models/Question';
import { useAppDispatch } from '@store/index';
import { postQuestionUser } from '@store/questionUser/services';
import createAlert from '@utils/createAlert';
import { createQuestionValidationSchema } from '@utils/validation/createContactFormValidation';
import './ContactFormStyle.css';

const ENV_DEV = import.meta.env.DEV;

const SITE_KEY = ENV_DEV
	? (import.meta.env.VITE_SITE_KEY_DEV as string)
	: (import.meta.env.VITE_SITE_KEY as string);

const ContactForm = () => {
	const dispatch = useAppDispatch();
	const recaptchaRef = useRef<ReCAPTCHA>(null);
	const { t, i18n } = useTranslation('translation', { keyPrefix: 'contact.form' });
	const { t: tvalidation } = useTranslation('translation', { keyPrefix: 'contact.errors' });
	const lng = i18n.language;

	const [showCaptcha, setShowCaptcha] = useState(false);
	const [captchaValue, setCaptchaValue] = useState<string | null>(null);

	const initialValues: QuestionUserRequest = {
		name: '',
		email: '',
		question: '',
		consent: false,
	};

	const validationSchema = createQuestionValidationSchema(tvalidation);

	const handleCaptchaChange = (value: string | null) => {
		setCaptchaValue(value);
	};

	const onSubmit = async (values: QuestionUserRequest, { setSubmitting, resetForm }: any) => {
		if (!captchaValue) {
			// Если капча ещё не пройдена, показать её
			setShowCaptcha(true);
			return;
		}

		if (!values.consent) {
			createAlert('error', tvalidation('submitFail'));
			return;
		}

		try {
			await dispatch(
				postQuestionUser({
					...values,
					captchaToken: captchaValue,
				})
			).unwrap();

			createAlert('success', t('submitSuccess'));
			resetForm();
		} catch {
			createAlert('error', tvalidation('submitFail'));
		} finally {
			setSubmitting(false);
			recaptchaRef.current?.reset();
			setCaptchaValue(null);
			setShowCaptcha(false);
		}
	};

	return (
		<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
			{({ isSubmitting }) => (
				<Form className="contact-form">
					<section className="page-header">
						<h2>{t('title')}</h2>
					</section>

					<div className="form-group">
						<label htmlFor="name">{t('name')}</label>
						<Field id="name" type="text" name="name" className="form-input" />
						<ErrorMessage name="name">
							{(msg) => (
								<div className="form-error" role="alert">
									{msg}
								</div>
							)}
						</ErrorMessage>
					</div>

					<div className="form-group">
						<label htmlFor="email">{t('email')}</label>
						<Field id="email" type="email" name="email" className="form-input" />
						<ErrorMessage name="email">
							{(msg) => (
								<div className="form-error" role="alert">
									{msg}
								</div>
							)}
						</ErrorMessage>
					</div>

					<div className="form-group">
						<label htmlFor="question">{t('question')}</label>
						<Field
							id="question"
							as="textarea"
							name="question"
							className="form-textarea"
							rows={12}
						/>
						<ErrorMessage name="question">
							{(msg) => (
								<div className="form-error" role="alert">
									{msg}
								</div>
							)}
						</ErrorMessage>
					</div>

					<div className="form-group">
						<Field name="consent">
							{({ field, form, meta }: any) => (
								<>
									<div className="checkbox-wrapper">
										<input
											type="checkbox"
											id="consent"
											{...field}
											checked={field.value}
											onChange={(e) => form.setFieldValue('consent', e.target.checked)}
											aria-describedby="consent-error"
										/>
										<label htmlFor="consent">{t('consent')}</label>
									</div>
									{meta.touched && meta.error && (
										<div id="consent-error" className="form-error" role="alert">
											{meta.error}
										</div>
									)}
								</>
							)}
						</Field>
					</div>

					<button type="submit" className="form-submit" disabled={isSubmitting}>
						{showCaptcha ? t('submit') : t('check')}
					</button>

					<div className="form-group">
						{showCaptcha && (
							<ReCAPTCHA
								key={lng}
								ref={recaptchaRef}
								sitekey={SITE_KEY}
								size="normal"
								hl={lng}
								badge={'bottomleft'}
								onChange={handleCaptchaChange}
							/>
						)}
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default ContactForm;
