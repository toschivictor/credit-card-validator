interface SpinnerProps {
	size?: number;
	color?: string;
	className?: string;
}

export const Spinner = ({
	size = 24,
	color = 'currentColor',
	className = '',
}: SpinnerProps) => {
	return (
		<svg
			className={`animate-spin ${className}`}
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M12 4.75V6.25"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M17.1266 6.87347L16.0659 7.93413"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				opacity="0.5"
			/>
			<path
				d="M19.25 12L17.75 12"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				opacity="0.3"
			/>
			<path
				d="M17.1266 17.1265L16.0659 16.0659"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				opacity="0.1"
			/>
			<path
				d="M12 19.25V17.75"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				opacity="0.1"
			/>
			<path
				d="M7.9342 17.1265L8.99486 16.0659"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				opacity="0.3"
			/>
			<path
				d="M4.75 12L6.25 12"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				opacity="0.5"
			/>
			<path
				d="M7.9342 6.87347L8.99486 7.93413"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				opacity="0.7"
			/>
		</svg>
	);
};
