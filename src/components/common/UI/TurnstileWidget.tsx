import { Turnstile } from '@marsidev/react-turnstile';
import type { TurnstileInstance } from '@marsidev/react-turnstile';
import { forwardRef } from 'react';
import type { Dispatch } from 'react';
import { useTranslation } from 'react-i18next';

const ENV_DEV = import.meta.env.VITE_APP_ENV === 'development';

const SITE_KEY = ENV_DEV
	? (import.meta.env.VITE_TURNSTILE_SITE_KEY_DEV as string)
	: (import.meta.env.VITE_TURNSTILE_SITE_KEY as string);

type TurnstileWidgetProps = {
	onTokenChange: Dispatch<string | null>;
	compact?: boolean;
};

const TurnstileWidget = forwardRef<TurnstileInstance, TurnstileWidgetProps>(
	({ onTokenChange, compact = false }, ref) => {
		const { i18n } = useTranslation();

		return (
			<Turnstile
				key={i18n.language}
				ref={ref}
				siteKey={SITE_KEY}
				options={{ language: i18n.language, size: compact ? 'compact' : 'normal' }}
				onSuccess={onTokenChange}
				onExpire={() => onTokenChange(null)}
				onError={() => onTokenChange(null)}
			/>
		);
	}
);

TurnstileWidget.displayName = 'TurnstileWidget';

export default TurnstileWidget;
