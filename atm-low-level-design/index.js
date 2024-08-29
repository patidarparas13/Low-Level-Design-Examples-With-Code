const ATM = require('./ATM');
const Account =  require('./Account');
const ATMController = require("./ATMController");

const atm = new ATM();

const account1 = new Account('123456', '1234', 5000);
const account2 = new Account('654321', '4321', 10000);

atm.addAccount(account1);
atm.addAccount(account2);

const atmController = new ATMController(atm);

try {
  atmController.authenticate('123456', '1234');
  atmController.checkBalance();
  atmController.withdraw(2000);
  atmController.checkBalance();
  atmController.viewTransactionHistory();
} catch (error) {
  console.error(error.message);
}