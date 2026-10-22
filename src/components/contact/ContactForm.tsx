import type { TurnstileInstance } from '@marsidev/react-turnstile';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import TurnstileWidget from '@components/common/UI/TurnstileWidget';
import type { QuestionUserRequest } from '@models/Question';
import { useAppDispatch } from '@store/index';
import { postQuestionUser } from '@store/questionUser/services';
import createAlert from '@utils/createAlert';
import { createQuestionValidationSchema } from '@utils/validation/createContactFormValidation';
import './ContactFormStyle.css';

const ContactForm = () => {
	const dispatch = useAppDispatch();
	const turnstileRef = useRef<TurnstileInstance>(null);
	const { t } = useTranslation('translation', { keyPrefix: 'contact.form' });
	const { t: tvalidation } = useTranslation('translation', { keyPrefix: 'contact.errors' });

	const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

	const initialValues: QuestionUserRequest = {
		name: '',
		email: '',
		question: '',
		consent: false,
	};

	const validationSchema = createQuestionValidationSchema(tvalidation);

	const onSubmit = async (values: QuestionUserRequest, { setSubmitting, resetForm }: any) => {
		if (!turnstileToken) {
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
					turnstileToken,
				})
			).unwrap();

			createAlert('success', t('submitSuccess'));
			resetForm();
		} catch {
			createAlert('error', tvalidation('submitFail'));
		} finally {
			setSubmitting(false);
			turnstileRef.current?.reset();
			setTurnstileToken(null);
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

					<div className="form-group">
						<TurnstileWidget ref={turnstileRef} onTokenChange={setTurnstileToken} />
					</div>

					<button type="submit" className="form-submit" disabled={isSubmitting || !turnstileToken}>
						{t('submit')}
					</button>
				</Form>
			)}
		</Formik>
	);
};

export default ContactForm;
