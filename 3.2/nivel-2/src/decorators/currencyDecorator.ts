import * as conversions from './currency_conversions.json';

interface CurrencyConversions {
	[key: string]: number;
}

function currencyDecorator(_target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
	const originalMethod = descriptor.value;

	descriptor.value = function(itemName: string, currency: string, amount: number) {
		const conversionKey = `${currency}_EUR`;

		if (conversionKey in conversions) {
			const conversionRate: number = (conversions as CurrencyConversions)[conversionKey];
			const convertedAmount = amount * conversionRate;

			console.log(`${itemName}: ${amount} ${currency}`);
			console.log(`Converted price to EUR: ${convertedAmount.toFixed(2)}`);

			return originalMethod.call(this, itemName, currency, amount);
		}
		else {
			return 'Currency not found in conversions.';
		}
	};
	return descriptor;
}

export default currencyDecorator;
