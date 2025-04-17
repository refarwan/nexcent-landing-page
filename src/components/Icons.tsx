export interface IconType {
	size?: number;
	className?: string;
}

export const BurgerIcon = ({ size = 24, className }: IconType) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			className={className}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M20 6L4 6"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<path
				d="M20 12L4 12"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<path
				d="M20 18H4"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
		</svg>
	);
};

export const RightIcon = ({ size = 24, className }: IconType) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			className={className}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M16 16L19.2929 12.7071C19.6834 12.3166 19.6834 11.6834 19.2929 11.2929L16 8M19 12L5 12"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
		</svg>
	);
};

export const SendIcon = ({ size = 24, className }: IconType) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			className={className}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M19.7232 2.75892C20.6613 2.44621 21.5538 3.3387 21.2411 4.27681L16.1845 19.4466C15.8561 20.4318 14.5163 20.563 14.0029 19.6603L10.9078 14.2171C10.6409 13.7477 10.2522 13.3591 9.78283 13.0922L4.33973 9.99709C3.437 9.48377 3.56824 8.14391 4.55342 7.81552L19.7232 2.75892Z"
				stroke="currentColor"
				stroke-width="1.5"
			/>
			<path
				d="M12.7861 11.2143L10.7861 13.2143"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
};
