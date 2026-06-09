class BankBalance {
    #balance; //to make this as a private variable

    constructor(balance) {
        this.#balance  = balance;
    }
    getBalance() {
        return this.#balance;
    }
}

let b = new BankBalance(5684220000);
//console.log(b.#balance)

console.log(b.getBalance());