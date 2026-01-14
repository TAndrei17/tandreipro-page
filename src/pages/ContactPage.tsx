import { useSiteHeaderHeight } from '@context/SettingsContext';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const PHONE = import.meta.env.VITE_PHONE;
const EMAIL = import.meta.env.VITE_EMAIL;
const TELEGRAM = import.meta.env.VITE_TELEGRAM;
const WHATSAPP = import.meta.env.VITE_WHATSAPP;
const LINKEDIN = import.meta.env.VITE_LINKEDIN;

const ContactPage = () => {
	const { siteHeaderHeight } = useSiteHeaderHeight();
	const { t, i18n } = useTranslation();
	const language = i18n.language;

	useEffect(() => {
		document.title = t('browserTabs.browserTabContact');
	}, [t, language]);

	return (
		<div style={{ paddingTop: siteHeaderHeight + 10 }}>
			<p>{t('contact.contactDesc')}</p>
			<p>
				Телефон: <a href={`tel:${PHONE.replace(/\s+/g, '')}`}>{PHONE}</a>
			</p>
			<p>
				Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
			</p>
			<p>
				Telegram:{' '}
				<a href={`https://t.me/${TELEGRAM}`} target="_blank" rel="noopener noreferrer">
					@{TELEGRAM}
				</a>
			</p>
			<p>
				WhatsApp:{' '}
				<a
					href={`https://wa.me/${WHATSAPP.replace(/[^\d]/g, '')}`}
					target="_blank"
					rel="noopener noreferrer">
					{WHATSAPP}
				</a>
			</p>
			<p>
				LinkedIn:{' '}
				<a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
					{LINKEDIN}
				</a>
			</p>
		</div>
	);
};

export default ContactPage;
