import type { StackIcon } from '@constants/getTechStackIcons';

const IconsList = ({ icons }: { icons: StackIcon[] }) => {
	return (
		<div className={'icons-container unified-tech-grid'}>
			{icons.map((icon) => {
				const label = icon.title
					.replace(/-logo$/i, '')
					.replace(/^HTML$/, 'HTML5')
					.replace(/^CSS$/, 'CSS3');
				const isMonochrome = /^(Git|GitHub|Expo|ESLint|Prettier)/i.test(icon.title);

				return (
					<div
						className={`tech-stack-badge tech-pill ${isMonochrome ? 'is-monochrome' : ''}`}
						key={`${icon.title}-${icon.id}`}>
						{icon.logo ? (
							<img className={'service-article-icon'} src={icon.logo} alt={`${label} logo`} />
						) : (
							<span className={'tech-stack-placeholder'} aria-hidden="true">
								{label.slice(0, 2).toUpperCase()}
							</span>
						)}
						<span>{label}</span>
					</div>
				);
			})}
		</div>
	);
};

export default IconsList;
