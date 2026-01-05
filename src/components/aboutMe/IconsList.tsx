import type { StackIcon } from '@constants/getTechStackIcons';

const IconsList = ({ icons }: { icons: StackIcon[] }) => {
	return (
		<div className={'icons-container'}>
			{icons.map((icon) => (
				<img key={icon.id} className={'service-article-icon'} src={icon.logo} alt={icon.title} />
			))}
		</div>
	);
};

export default IconsList;
