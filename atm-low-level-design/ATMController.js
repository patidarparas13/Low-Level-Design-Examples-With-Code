// ATM Controller Class
class ATMController {
    constructor(atm) {
      this.atm = atm;
      this.currentAccount = null;
    }
  
    authenticate(accountNumber, pin) {
      const account = this.atm.getAccount(accountNumber);
      if (!account || !account.verifyPin(pin)) {
        throw new Error('Authentication failed. Invalid account number or PIN.');
      }
      this.currentAccount = account;
      console.log(`Welcome, Account Number: ${accountNumber}`);
    }
  
    withdraw(amount) {
      if (!this.currentAccount) {
        throw new Error('No account authenticated.');
      }
      if (amount > this.atm.getAvailableBalance()) {
        throw new Error('ATM has insufficient funds.');
      }
      this.currentAccount.withdraw(amount);
      const cash = this.atm.dispenseCash(amount);
      console.log(`Please collect your cash:`, cash);
    }
  
    deposit(amount) {
      if (!this.currentAccount) {
        throw new Error('No account authenticated.');
      }
      this.currentAccount.deposit(amount);
      console.log(`Amount deposited successfully.`);
    }
  
    checkBalance() {
      if (!this.currentAccount) {
        throw new Error('No account authenticated.');
      }
      console.log(`Your balance is: ${this.currentAccount.getBalance()}`);
    }
  
    viewTransactionHistory() {
      if (!this.currentAccount) {
        throw new Error('No account authenticated.');
      }
      console.log(`Transaction History:`, this.currentAccount.getTransactionHistory());
    }
  }

module.exports = ATMController;
