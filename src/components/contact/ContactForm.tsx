import { Form, Formik, Field, ErrorMessage } from 'formik';
import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useTranslation } from 'react-i18next';

import type { QuestionUserRequest } from '@models/Question';
import { useAppDispatch } from '@store/index';
import { postQuestionUser } from '@store/questionUser/services';
import createAlert from '@utils/createAlert';
import { createQuestionValidationSchema } from '@utils/createContactFormValidation';
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
			{({ isSubmitting, handleSubmit }) => (
				<Form className="contact-form">
					<section className="page-header">
						<h2>{t('title')}</h2>
					</section>

					<div className="form-group">
						<label htmlFor="name">{t('name')}</label>
						<Field name="name" className="form-input" />
						<ErrorMessage name="name" component="div" className="form-error" />
					</div>

					<div className="form-group">
						<label htmlFor="email">{t('email')}</label>
						<Field type="email" name="email" className="form-input" />
						<ErrorMessage name="email" component="div" className="form-error" />
					</div>

					<div className="form-group">
						<label htmlFor="question">{t('question')}</label>
						<Field as="textarea" name="question" className="form-textarea" rows={12} />
						<ErrorMessage name="question" component="div" className="form-error" />
					</div>

					<button
						type="button"
						className="form-submit"
						disabled={isSubmitting}
						onClick={() => handleSubmit()}>
						{showCaptcha ? t('submit') : t('check')}
					</button>

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
				</Form>
			)}
		</Formik>
	);
};

export default ContactForm;
