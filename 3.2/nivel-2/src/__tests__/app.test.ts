import currencyDecorator from '../decorators/currencyDecorator';

// Mocked conversion data
jest.mock('../decorators/currency_conversions.json', () => ({
	USD_EUR: 0.819908,
	GBP_EUR: 1.156661,
	CHF_EUR: 0.913791
}));

class MockClass {
	@currencyDecorator
	calculateCost(name: string, currency: string, amount: number) {
		return `Item: ${name}\nCost: ${currency} ${amount}`;
	}
}

describe('Currency Decorator', () => {
	beforeEach(() => {
		jest.spyOn(console, 'log').mockImplementation(() => {});
	});

	it('should apply the currency conversion correctly', () => {
		const mockInstance = new MockClass();

		mockInstance.calculateCost('item1', 'USD', 100);

		expect(console.log).toHaveBeenCalledWith('item1: 100 USD');
		expect(console.log).toHaveBeenCalledWith('Converted price to EUR: 81.99');
	});

	it('should throw an error if given an unknown currency', () => {
		const mockInstance = new MockClass();

		expect(() => {
			mockInstance.calculateCost('item2', 'PSO', 100);
		}).toThrowError('Currency not found in conversions.');
	});
});
