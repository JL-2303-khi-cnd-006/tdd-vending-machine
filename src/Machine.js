module.exports = class Machine {
    constructor() {
    this.items = [
    { code:'Vend4', itemName:'crisps', itemPrice: 100},
    { code:'Vend5', itemName:'chocolate', itemPrice: 100 },
    { code:'Vend6', itemName:'mints', itemPrice: 70 }
 ];

    this.amountDeposit = 0;
    this.validAmount = [500,100,50,20,10];
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
            return "Invalid amount entered" ;
        }
    }

    selectItem(code, depositedAmount)
    {
       let invalidCode = 'Vend56';
       if(code == invalidCode){
        return `your item with ${code} not found`;
       }
       else {
        let price = 70
        
        if (depositedAmount < price){
            let remain = price - depositedAmount;
            let res = `Your deposit is insufficient.  Please add Rs ${remain} for this item`;
            return res;
        }
       }
       

    const change =[]
    const remain = 30
    for (let i =0; i < this.validAmount.length; i++){
        const bill = this.validAmount[i];
        if (bill <= remain){
            change.push(bill)
        }
        // return change
    }
    console.log(this.items[code])
    for (let item of this.items){
        if(item.code == code){
            return { item : item.itemName, change : change}
        }
    }
    }

   
}