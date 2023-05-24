import * as fs from 'fs';
import * as path from 'path';
import Middlewares from './middleware'

interface Calculation {
  operation: string;
  operands: number[];
}

interface InputData {
  operations: Calculation[];
}

// Construct the absolute path to input.json
const jsonFilePath = path.resolve(__dirname, '../static/input.json');
// Read the JSON file
const jsonInput: string = fs.readFileSync(jsonFilePath, 'utf8');
const inputData: InputData = JSON.parse(jsonInput);

const performCalculation = (calc: Calculation): number => {
  const { operation, operands } = calc;
  let result: number;
  const middlewares = Middlewares.getInstance();

  // Log the operation
  console.log(`Performing operation: ${operation} on ${operands}`);
  // Modify the operands by applying a random middleware
  middlewares.applyRandomMiddleware(operands);
  // Log the new operands
  console.log(`New operands: ${operands}`);
    
  switch (operation) {
    case 'add':
      result = operands.reduce((acc, curr) => acc + curr);
      break;
    case 'subtract':
      result = operands.reduce((acc, curr) => acc - curr);
      break;
    case 'multiply':
      result = operands.reduce((acc, curr) => acc * curr);
      break;
    default:
      throw new Error('Invalid operation');
  }

  return result;
};

inputData.operations.forEach((calculation) => {
  const result = performCalculation(calculation);
  console.log(`Result (${calculation.operation}): ${result}`);
});

export default performCalculation;
