import { Button } from '../../components/Button/Button';
import InputField from '../../components/InputField/InputField';
import ResultMessage from '../../components/ResultMessage/ResultMessage';
import { useCreditCardValidator } from '../../hooks/useCreditCardValidator';

const CreditCardModule = () => {
	const {
		cardNumber,
		setCardNumber,
		validationResult,
		validateCard,
		isLoading,
	} = useCreditCardValidator();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		validateCard();
	};

	return (
		<>
			<h1 className="text-2xl font-bold text-gray-700 mb-4">
				Credit Card Validator
			</h1>
			<form onSubmit={handleSubmit} className="flex items-center w-1/5">
				<InputField
					value={cardNumber}
					onChange={setCardNumber}
					placeholder="Enter credit card number"
					disabled={isLoading}
				/>
				<Button isLoading={isLoading}>Validate</Button>
			</form>
			<ResultMessage
				message={validationResult?.message ?? null}
				isValid={validationResult?.isValid}
			/>
		</>
	);
};

export default CreditCardModule;
