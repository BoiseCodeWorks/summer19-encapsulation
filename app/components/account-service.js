import Account from "../models/Account.js";

console.log("step 1 last requisite file to be imported")

let _account = new Account(5720, "Mr. Porter Tyler", 23)

export default class AccountService {
    constructor() {
        console.log('step 3 hello from service constructor')
    }

    get Account() {
        return new Account(_account.accountNumber, _account.name, _account.balance)
    }

    deposit() {
        _account.balance += 5
    }

    withdraw() {
        if (_account.balance - 5 < 0) {
            throw new Error("INSUFFICIENT FUNDS!")
        }
        _account.balance -= 5
    }
}