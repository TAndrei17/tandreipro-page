import { useSiteHeaderHeight } from '@context/SettingsContext';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './styles/ContactPage.css';
import logos from '@constants/logos';
import ContactItem from '@components/contact/ContactItem';

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
			<main>
				<section className={'service-section'}>
					<div className={'service-article'}>
						<p>{t('contact.contactDesc')}</p>

						<address itemScope itemType="https://schema.org/Person">
							<dl>
								<dl>
									<ContactItem
										label="Телефон"
										value={PHONE}
										type="phone"
										logo={logos.phoneLogo}
										itemProp="telephone"
									/>
									<ContactItem
										label="Email"
										value={EMAIL}
										type="email"
										logo={logos.emailLogo}
										itemProp="email"
									/>
									<ContactItem
										label="Telegram"
										value={TELEGRAM}
										type="telegram"
										logo={logos.telegramLogo}
										itemProp="sameAs"
									/>
									<ContactItem
										label="WhatsApp"
										value={WHATSAPP}
										type="whatsApp"
										logo={logos.whatsAppLogo}
										itemProp="sameAs"
									/>
									<ContactItem
										label="LinkedIn"
										value={LINKEDIN}
										type="linkedIn"
										logo={logos.linkedInLogo}
										itemProp="sameAs"
									/>
								</dl>
							</dl>
						</address>
					</div>
				</section>
			</main>
		</div>
	);
};

export default ContactPage;
