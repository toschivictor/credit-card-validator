import React from 'react';

interface ButtonProps {
	onClick: () => void;
	text: string;
}

const Button = ({ onClick, text }: ButtonProps) => {
	return (
		<button
			onClick={onClick}
			className="bg-blue-500 text-white font-bold p-2 rounded-md hover:bg-blue-600"
		>
			{text}
		</button>
	);
};

export default Button;
