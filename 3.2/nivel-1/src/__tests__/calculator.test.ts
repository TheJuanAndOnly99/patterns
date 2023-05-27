import performCalculation from "../calculator";

// jest.mock("../static/input.json", () => ({
//   operations: [
//     {
//       operation: "add",
//       operands: [1, 2, 3],
//     },
//     {
//       operation: "subtract",
//       operands: [1, 2, 3],
//     },
//     {
//       operation: "multiply",
//       operands: [1, 2, 3],
//     },
//   ],
// }));

describe("Calculator", () => {

  beforeEach(() => {
    jest.spyOn(console, "log");
  });

  it("should log the operation", () => {
    const operations = [
      {
        operation: "add",
        operands: [1, 2, 3],
      },
      {
        operation: "subtract",
        operands: [1, 2, 3],
      },
      {
        operation: "multiply",
        operands: [1, 2, 3],
      },
    ]
    operations.forEach((operation) => {
      performCalculation(operation);
    });


    expect(console.log).toHaveBeenCalledWith("Performing operation: 'add' on 1,2,3");
    expect(console.log).toHaveBeenCalledWith("Performing operation: 'subtract' on 1,2,3");
    expect(console.log).toHaveBeenCalledWith("Performing operation: 'multiply' on 1,2,3");
  });
});
