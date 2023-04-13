module.exports = class Machine {
    constructor() {
    this.items = [
    { itemName:'crisps', itemPrice: 100},
    { itemName:'chocolate', itemPrice: 100 },
    { itemName:'mint', itemPrice: 70 },
 ];
}


    seeSelections() {
        return this.items;
    }
    }

