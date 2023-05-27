// class Item {
//   /** 
//   * @param name
//   * @param price
//   * @param currency
//   */
//   constructor(public name: string, public price: number, public currency: string) { }
// }

// type ItemType = {
//   name: string;
//   price: number;
//   currency: string;
// }

// const items: ItemType[] = [];

const convertor = {
  convertToEuros: (price: number) => {
    return price * 0.819908;
  },
};

export default { convertor };

