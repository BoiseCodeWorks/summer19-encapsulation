import {AccountController} from "./components/account-controller.js";


class App {
    constructor() {
        console.log("creating the app after imports completed")
        this.controllers = {
            accountController: new AccountController() //instantiated accountController
        }
        console.log("last step app is complete")
    }
}

window['app'] = new App()