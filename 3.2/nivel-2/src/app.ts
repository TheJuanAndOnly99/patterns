import currencyDecorator from './decorators/currencyDecorator';

class Item {
	constructor(public name: string, public currency?: string, public amount?: number) {}

	@currencyDecorator
	calculateCost(name: string, currency: string, amount: number) {
		this.name = name;
		this.currency = currency;
		this.amount = amount;
		return `Item: ${this.name}\nCost: ${currency} ${amount}`;
	}
}

const item1 = new Item('item1');
const item2 = new Item('item2');

item1.calculateCost('item1', 'USD', 100);
item2.calculateCost('item2', 'GBP', 50);

export default Item;
