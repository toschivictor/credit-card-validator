import { validateCreditCard } from '../domain/validateCreditCard';

export const validateCreditCardUseCase = (cardNumber: string): boolean => {
	if (!cardNumber) {
		throw new Error('Card number is required');
	}
	return validateCreditCard(cardNumber);
};
