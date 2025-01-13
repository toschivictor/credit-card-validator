import React from 'react';

interface InputFieldProps {
	value: string;
	onChange: (value: string) => void;
	placeholder: string;
	disabled?: boolean;
}

export const InputField = ({
	value,
	onChange,
	placeholder,
	disabled,
}: InputFieldProps) => {
	return (
		<input
			type="text"
			value={value}
			onChange={(e) => onChange(e.target.value)}
			placeholder={placeholder}
			disabled={disabled}
			className="border border-gray-300 rounded-md p-2 w-full font-medium text-gray-800 disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-400"
		/>
	);
};

export default InputField;
