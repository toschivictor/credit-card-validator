import React from 'react';

interface ResultMessageProps {
	message: string | null;
}

const ResultMessage = ({ message }: ResultMessageProps) => {
	return message ? <p className="text-lg">{message}</p> : null;
};

export default ResultMessage;
