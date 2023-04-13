module.exports = class Machine {
    constructor() {
    this.items = [
    { itemName:'crisps', itemPrice: 100},
    { itemName:'chocolate', itemPrice: 100 },
    { itemName:'mint', itemPrice: 70 }
 ];

    this.amountDeposit = 0;
    this.validAmount = [10,20,50,100,500,1000,5000];
}
    seeSelections() {
        return this.items;
    }


    deposit(amount)
    {
        if(this.validAmount.includes(amount)) {
            this.amountDeposit += amount;
            let res = `you have deposited Rs ${this.amountDeposit}`;  
            return res;      
        }
        else {
            return "Invalid amount entered";
        }
    }
}