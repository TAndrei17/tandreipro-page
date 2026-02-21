import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './styles/ContactPage.css';
import { Link } from 'react-router';

import ContactForm from '@components/contact/ContactForm';
import ContactItem from '@components/contact/ContactItem';
import images from '@constants/images';
import logos from '@constants/logos';
import { useSiteHeaderHeight } from '@context/SettingsContext';

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
		<div style={{ paddingTop: siteHeaderHeight }}>
			<main>
				<section className="page-header">
					<h1>{t('appHeader.contact')}</h1>
				</section>

				<section className={'page-section'}>
					<div className={'service-article'}>
						<div className="contact-intro-container">
							<img src={images.tandrei} alt="Tandrei" className={'contact-image'} />
							<p className={'contact-intro'}>{t('contact.contactIntro')}</p>
						</div>

						<address itemScope itemType="https://schema.org/Person">
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

						<div className="contact-form-container">
							<ContactForm />
						</div>
					</div>
				</section>
			</main>

			<div className="legal-micro-link">
				<Link to="/legal">{t('legal.title')}</Link>
			</div>
		</div>
	);
};

export default ContactPage;
