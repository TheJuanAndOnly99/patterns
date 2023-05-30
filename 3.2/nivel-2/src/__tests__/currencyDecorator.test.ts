// import currencyDecorator from '../decorators/currencyDecorator';
import Item from '../app';

// class MockClass {
// 	@currencyDecorator
// 	calculateCost(name: string, currency: string, amount: number) {
// 		return `Item: ${name}\nCost: ${currency} ${amount}`;
// 	}
// }

describe('Currency Decorator', () => {
  it('should be a Decorator', () => {

    const descriptor = Object.getOwnPropertyDescriptor(Item, 'calculateCost');
    expect(descriptor?.value).toBeInstanceOf(Function);
	});
});
