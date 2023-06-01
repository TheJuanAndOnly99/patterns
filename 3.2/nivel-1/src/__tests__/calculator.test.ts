import performCalculation from '../calculator';
import input from '../input.json';

//mock input.json
jest.mock('../input.json', () => ({
	operations: [
		{
			operation: 'add',
			operands: [ 5, 10, 15 ]
		}
	]
}));

describe('Calculator', () => {
	beforeEach(() => {
		jest.spyOn(console, 'log').mockImplementation(() => {});
	});

	it('should log the operation', () => {
		performCalculation(input.operations[0]);

		expect(console.log).toHaveBeenCalledWith("Performing operation: 'add' on 5,10,15");
		expect(console.log).toHaveBeenCalledWith('Applying middleware: square');
		expect(console.log).toHaveBeenCalledWith('New operands: 25,100,225');
	});

	it('should throw and error if given an unknown operation', () => {
		const unknownOperation = {
			operation: 'divide',
			operands: [ 5, 10, 15 ]
		};

		expect(() => {
			performCalculation(unknownOperation);
		}).toThrowError('Invalid operation');
	});
});
