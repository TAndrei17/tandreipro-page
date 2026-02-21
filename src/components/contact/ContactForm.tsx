import type { QuestionUserRequest } from '@models/Question';
import { createQuestionValidationSchema } from '@utils/createContactFormValidation';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import ReCAPTCHA from 'react-google-recaptcha';
import { postQuestionUser } from '@store/questionUser/services';
import { useAppDispatch } from '@store/index';
import './ContactFormStyle.css';

const ENV_DEV = import.meta.env.DEV;

const SITE_KEY = ENV_DEV
	? (import.meta.env.VITE_SITE_KEY_DEV as string)
	: (import.meta.env.VITE_SITE_KEY as string);

const ContactForm = () => {
	const dispatch = useAppDispatch();
	const recaptchaRef = useRef<ReCAPTCHA>(null);
	const { t, i18n } = useTranslation();
	const lng = i18n.language;

	const initialValues: QuestionUserRequest = {
		name: '',
		email: '',
		question: '',
	};

	const validationSchema = createQuestionValidationSchema(t);

	const onSubmit = async (values: QuestionUserRequest, { setSubmitting, resetForm }: any) => {
		try {
			const captchaToken = await recaptchaRef.current?.executeAsync();

			if (!captchaToken) {
				console.error('CAPTCHA not solved');
				return;
			}

			await dispatch(
				postQuestionUser({
					...values,
					captchaToken,
				})
			).unwrap();

			resetForm();
			recaptchaRef.current?.reset();
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
			{({ isSubmitting }) => (
				<Form className="contact-form">
					<h2>Задайте ваш вопрос</h2>
					<div className="form-group">
						<label htmlFor="name">{t('contact.form.name')}</label>
						<Field name="name" className="form-input" />
						<ErrorMessage name="name" component="div" className="form-error" />
					</div>

					<div className="form-group">
						<label htmlFor="email">{t('contact.form.email')}</label>
						<Field type="email" name="email" className="form-input" />
						<ErrorMessage name="email" component="div" className="form-error" />
					</div>

					<div className="form-group">
						<label htmlFor="question">{t('contact.form.question')}</label>
						<Field as="textarea" name="question" className="form-textarea" />
						<ErrorMessage name="question" component="div" className="form-error" />
					</div>

					<button type="submit" className="form-submit" disabled={isSubmitting}>
						{t('contact.form.submit')}
					</button>

					<ReCAPTCHA ref={recaptchaRef} sitekey={SITE_KEY} size="invisible" hl={lng} />
				</Form>
			)}
		</Formik>
	);
};

export default ContactForm;
