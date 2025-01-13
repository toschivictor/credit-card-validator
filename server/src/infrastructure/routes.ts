import express from 'express';
import { validateCreditCardUseCase } from '../application/validateCreditCardUseCase';

const router = express.Router();

router.post('/validate', (req, res) => {
	try {
		const { cardNumber } = req.body;
		const isValid = validateCreditCardUseCase(cardNumber);
		res.json({ valid: isValid });
	} catch (error) {
		res.status(400).json({ error: (error as Error).message });
	}
});

export default router;
