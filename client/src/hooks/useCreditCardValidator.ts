import { useState } from 'react';
import { API_URL } from '../constants/constants';

export const useCreditCardValidator = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [cardNumber, setCardNumber] = useState('');

	const [validationResult, setValidationResult] = useState<{
		message: string;
		isValid: boolean;
	} | null>(null);

	const validateCard = async () => {
		try {
			setIsLoading(true);
			setValidationResult(null);

			const response = await fetch(API_URL, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ cardNumber }),
			});

			const data = await response.json();
			setValidationResult({
				message: data.valid ? 'Valid Credit Card' : 'Invalid Credit Card',
				isValid: data.valid,
			});
		} catch (error) {
			setValidationResult({
				message: 'Error validating credit card.',
				isValid: false,
			});
		} finally {
			setIsLoading(false);
		}
	};

	return {
		cardNumber,
		setCardNumber,
		validationResult,
		validateCard,
		isLoading,
	};
};
