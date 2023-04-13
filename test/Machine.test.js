const Machine = require('../src/Machine');

describe('the vending machine', () => {
    it('should have items to purchase', () => {
        // setup
        const machine = new Machine();
        const expected = [{itemName: 'crisps', itemPrice: 100}, {itemName: 'chocolate',itemPrice: 100}, {itemName:'mint', itemPrice: 70}];
        // exercise
        const actual = machine.seeSelections();
        // assert
        expect(actual).toEqual(expected);
    });
});
