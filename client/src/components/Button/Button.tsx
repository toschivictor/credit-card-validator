import React from 'react';
import { Spinner } from '../Spinner/Spinner';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	isLoading?: boolean;
}

export const Button = ({
	children,
	isLoading = false,
	disabled,
	className = '',
	...props
}: ButtonProps) => {
	return (
		<button
			className={`px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 
				disabled:bg-blue-300 disabled:cursor-not-allowed flex items-center justify-center gap-2 
				${className}`}
			disabled={disabled || isLoading}
			{...props}
		>
			{isLoading && <Spinner size={20} color="white" />}
			{children}
		</button>
	);
};

export default Button;
