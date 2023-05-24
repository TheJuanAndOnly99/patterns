import performCalculation from "../calculator";

describe("Calculator", () => {

  beforeEach(() => {
    jest.spyOn(console, "log");
  });

  // it("should perform calculations", () => {
  //   const consoleSpy = jest.spyOn(console, "log");
  //   performCalculation();
  //   expect(consoleSpy).toHaveBeenCalledWith("Performing operation: add on 2,3");
  // });
});
