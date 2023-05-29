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
	let consoleLogSpy: jest.SpyInstance;

	beforeEach(() => {
		consoleLogSpy = jest.spyOn(console, 'log');
	});

	it('should apply the currency conversion correctly', () => {
		const mockInstance = new MockClass();

		mockInstance.calculateCost('item1', 'USD', 100);

		expect(consoleLogSpy).toHaveBeenCalledTimes(2);
		expect(consoleLogSpy).toHaveBeenCalledWith('item1: 100 USD');
		expect(consoleLogSpy).toHaveBeenCalledWith('Converted price to EUR: 81.99');

		consoleLogSpy.mockRestore();
	});
});
