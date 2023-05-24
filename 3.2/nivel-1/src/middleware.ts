class Middlewares {
  private static instance: Middlewares | null = null;
  private middlewares: { [name: string]: Function };

  private constructor() {
    this.middlewares = {};
  }

  public static getInstance(): Middlewares {
    if (!Middlewares.instance) {
      Middlewares.instance = new Middlewares();
    }
    return Middlewares.instance;
  }

  public addMiddleware(name: string, middleware: Function): void {
    this.middlewares[name] = middleware;
  }

  public getMiddlewares(): { [name: string]: Function } {
    return this.middlewares;
  }

  public applyMiddleware(name: string, operands: number[]): void {
    if (name in this.middlewares) {
      console.log(`Applying middleware: ${name}`);
      this.middlewares[name](operands);
    } else {
      throw new Error(`Middleware '${name}' does not exist.`);
    }
  }

  public applyRandomMiddleware(operands: number[]): void {
    const middlewareNames = Object.keys(this.middlewares);
    const randomIndex = Math.floor(Math.random() * middlewareNames.length);
    const randomMiddlewareName = middlewareNames[randomIndex];
    this.applyMiddleware(randomMiddlewareName, operands);
  }

  public resetMiddlewares(): void {
    this.middlewares = {};
  }
}

const middlewares = Middlewares.getInstance();

// Add middlewares
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

export default Middlewares;
