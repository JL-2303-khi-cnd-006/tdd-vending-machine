const Machine = require('../src/Machine');

describe('the vending machine', () => {
    it('should have items to purchase', () => {
        // setup
        const machine = new Machine();
        const expected = [
            { code:'Vend4', itemName:'crisps', itemPrice: 100},
            { code:'Vend5', itemName:'chocolate', itemPrice: 100 },
            { code:'Vend6', itemName:'mints', itemPrice: 70 }
         ];
        
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
    machine.deposit(100);
    const expected = "you have deposited Rs 150";
    //exercise
    const result = machine.deposit(50);
    //assert
    expect(result).toBe(expected);
    
   });


it('Unavailability of an item', () =>
{
const machine = new Machine();
const expected = "your item with Vend56 not found";
const result = machine.selectItem('Vend56');
expect(result).toBe(expected);

})


it('Unsufficient Deposit', () =>
{
const machine = new Machine();
const expected = "Your deposit is insufficient.  Please add Rs 20 for this item";
const result = machine.selectItem('Vend6', 50);
expect(result).toBe(expected);

})

it('Receiving Change', () =>
{
const machine = new Machine();
const expected = {item: 'mints', change: [20, 10]};
const result = machine.selectItem('Vend6', 100);
expect(result).toEqual(expected);

})


it('Cancel the Order', () =>
{
const machine = new Machine();
const expected = {change: 100}
machine.deposit(100)
const result = machine.cancel();
expect(result).toEqual(expected);

});