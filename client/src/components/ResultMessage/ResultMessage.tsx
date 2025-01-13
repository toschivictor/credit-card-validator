interface ResultMessageProps {
	message: string | null;
	isValid?: boolean;
}

const ResultMessage = ({ message, isValid }: ResultMessageProps) => {
	return message ? (
		<p
			className={`text-sm font-medium ${
				isValid ? 'text-green-500' : 'text-red-500'
			}`}
		>
			{message}
		</p>
	) : null;
};

export default ResultMessage;
