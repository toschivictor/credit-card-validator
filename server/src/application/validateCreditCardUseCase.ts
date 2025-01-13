import { validateCreditCard } from '../domain/validateCreditCard';

export const validateCreditCardUseCase = (cardNumber: string): boolean => {
	if (typeof cardNumber !== 'string') {
		throw new Error('Card number must be a string');
	}
	if (!cardNumber) {
		throw new Error('Card number is required');
	}
	return validateCreditCard(cardNumber);
};
