import AccountService from "./account-service.js";

console.log('step 2 from the controller')

let _accountService = new AccountService() //instantiated AccountService

function drawAccountDetails() {
    //1. get information regarding the account
    //2. drop the info on the dom
    let account = _accountService.Account
    document.querySelector('#name').textContent = account.name.toUpperCase()
    document.querySelector('#balance').textContent = '$' + account.balance
}

class AccountController {
    constructor() {
        console.log('step 4 hello from controller constructor')
        drawAccountDetails()
    }
    deposit() {
        _accountService.deposit()
        drawAccountDetails()
    }

    withdraw() {
        try {
            _accountService.withdraw()
            drawAccountDetails()
        } catch(err) {
            alert(err.message)
        }
    }
}

export {AccountController}