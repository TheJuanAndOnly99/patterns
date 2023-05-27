import convertor from "../app";

describe("Convertor", () => {
  it("should correctly convert an items price to euros", () => {
    const item1 = {
      "name": "item1",
      "price": 10,
      "currency": "USD"
    };
    const priceInEuros = convertor.convertor.convertToEuros(item1.price);
    expect(priceInEuros).toBe(8.19908);
  });
});