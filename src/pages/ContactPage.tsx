import { useTranslation } from 'react-i18next';
import './styles/ContactPage.css';
import { Link } from 'react-router-dom';

import ContactForm from '@components/contact/ContactForm';
import ContactItem from '@components/contact/ContactItem';
import ModalLogin from '@components/Modals/ModalLogIn';
import logos from '@constants/logos';
import { LEGAL_PAGE_PATH } from '@constants/routes';
import { useSiteHeaderHeight } from '@context/SettingsContext';

const PHONE = import.meta.env.VITE_PHONE;
const EMAIL = import.meta.env.VITE_EMAIL;
const TELEGRAM = import.meta.env.VITE_TELEGRAM;
const WHATSAPP = import.meta.env.VITE_WHATSAPP;
const LINKEDIN = import.meta.env.VITE_LINKEDIN;

const ContactPage = () => {
	const { siteHeaderHeight } = useSiteHeaderHeight();
	const { t } = useTranslation();

	return (
		<div className="contacts-page" style={{ paddingTop: siteHeaderHeight }}>
			<main>
				<section className="contacts-header">
					<h1>{t('appHeader.contact')}</h1>
					<p>{t('contact.contactIntro')}</p>
				</section>

				<section className="contacts-grid">
					<address className="contact-card" itemScope itemType="https://schema.org/Person">
						<dl className={'contact-container'}>
							<ContactItem
								label={t('contact.phone')}
								value={PHONE}
								type="phone"
								logo={logos.phoneLogo}
								itemProp="telephone"
							/>
							<ContactItem
								label={t('contact.whatsApp')}
								value={WHATSAPP}
								type="whatsApp"
								logo={logos.whatsAppLogo}
								itemProp="sameAs"
							/>
							<ContactItem
								label={t('contact.telegram')}
								value={TELEGRAM}
								type="telegram"
								logo={logos.telegramLogo}
								itemProp="sameAs"
							/>
							<ContactItem
								label={t('contact.email')}
								value={EMAIL}
								type="email"
								logo={logos.emailLogo}
								itemProp="email"
							/>
							<ContactItem
								label={t('contact.linkedIn')}
								value={LINKEDIN}
								type="linkedIn"
								logo={logos.linkedInLogo}
								itemProp="sameAs"
							/>
						</dl>
					</address>

					<div
						id="contact-form"
						className="contact-form-card contact-form-container"
						style={{ scrollMarginTop: siteHeaderHeight + 24 }}>
						<ContactForm />
					</div>
				</section>
			</main>

			<div className="legal-micro-link">
				<Link to={LEGAL_PAGE_PATH}>{t('legal.title')}</Link>
				<ModalLogin />
			</div>
		</div>
	);
};

export default ContactPage;
