const Machine = require('../src/Machine');

describe('the vending machine', () => {
    it('should have items to purchase', () => {
        // setup
        const machine = new Machine();
        const expected = [{itemName: 'crisps', itemPrice: 100}, {itemName: 'chocolate',itemPrice: 100}, {itemName:'mint', itemPrice: 70}];
        
        // exercise
        const actual = machine.seeSelections() ;
        
        // assert
        expect(actual).toEqual(expected) ; 
    });
});

it( 'Amount check' ,() => {
    //setup
    const machine = new Machine();
    const depAmount = 100;
    const expected = "you have deposited Rs 100";

    //exercise
    const actual = machine.deposit(depAmount);

    //assert
    expect(actual).toBe(expected);

});

it('Adding more amount', () => {
    //setup
    const machine = new Machine();
    machine.deposit(10);
    const expected = "you have deposited Rs 150";
    //exercise
    const result = machine.deposit(50);
    //assert
    expect(result).toBe(expected);
    
   });