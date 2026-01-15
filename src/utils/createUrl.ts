export type ContactType = 'phone' | 'email' | 'whatsApp' | 'telegram' | 'linkedIn';

const createUrl = (contact: string, type: ContactType): string => {
	if (!contact) {
		return '';
	}

	const sanitized = contact.replace(/\s+/g, '');

	const urlMap: Record<ContactType, string> = {
		phone: `tel:${sanitized}`,
		whatsApp: `https://wa.me/${sanitized}`,
		email: `mailto:${contact}`,
		telegram: `https://t.me/${contact}`,
		linkedIn: contact,
	};

	return urlMap[type] ?? '';
};

export default createUrl;
