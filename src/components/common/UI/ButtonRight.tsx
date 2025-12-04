const ButtonRight = ({
	className,
	onClick,
	buttonTitle,
}: {
	className: string;
	onClick: VoidFunction;
	buttonTitle: string;
}) => {
	return (
		<button className={className} onClick={onClick}>
			{buttonTitle}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 28 32"
				width="1.2em"
				height="1.2em"
				aria-hidden="true">
				<path
					d="M4 4 L16 16 L4 28"
					fill="none"
					stroke="currentColor"
					stroke-width="3"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>

				<path
					d="M16 4 L28 16 L16 28"
					fill="none"
					stroke="currentColor"
					stroke-width="3"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</button>
	);
};

export default ButtonRight;
