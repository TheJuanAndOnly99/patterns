import Middlewares from '../middleware';

describe('Middlewares', () => {

  let middlewares: Middlewares;

  beforeEach(() => {
    // Clear middlewares before each test
    middlewares = Middlewares.getInstance();
    
    middlewares.addMiddleware('square', (operands: number[]) => {
      for (let i = 0; i < operands.length; i++) {
        operands[i] = operands[i] * operands[i];
      }
    });
    
    middlewares.addMiddleware('cube', (operands: number[]) => {
      for (let i = 0; i < operands.length; i++) {
        operands[i] = operands[i] * operands[i] * operands[i];
      }
    });
    
    middlewares.addMiddleware('divide by 2', (operands: number[]) => {
      for (let i = 0; i < operands.length; i++) {
        operands[i] = operands[i] / 2;
      }
    });
  });

  it('should add the "cube", "square", and "divide by 2" middlewares', () => {
    expect(Object.keys(middlewares.getMiddlewares())).toEqual(['cube', 'square', 'divide by 2']);
  });

  it('should apply middlewares', () => {
    const operands = [2, 3];

    middlewares.applyMiddleware('square', operands);
    expect(operands).toEqual([4, 9]);

    middlewares.applyMiddleware('cube', operands);
    expect(operands).toEqual([64, 729]);
  });

  it('should throw an error when applying an unknown middleware', () => {
    const operands = [2, 3];

    expect(() => {
      middlewares.applyMiddleware('unknown', operands);
    }).toThrow("Middleware 'unknown' does not exist.");
  });
});
