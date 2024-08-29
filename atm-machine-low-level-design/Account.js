class Account {
    constructor(accountNumber, pin, balance = 0) {
      this.accountNumber = accountNumber;
      this.pin = pin;
      this.balance = balance;
      this.transactionHistory = [];
    }
  
    verifyPin(pin) {
      return this.pin === pin;
    }
  
    withdraw(amount) {
      if (amount > this.balance) {
        throw new Error('Insufficient balance.');
      }
      this.balance -= amount;
      this.addTransaction('Withdrawal', amount);
    }
  
    deposit(amount) {
      this.balance += amount;
      this.addTransaction('Deposit', amount);
    }
  
    getBalance() {
      return this.balance;
    }
  
    addTransaction(type, amount) {
      this.transactionHistory.push({
        type,
        amount,
        date: new Date().toLocaleString()
      });
    }
  
    getTransactionHistory() {
      return this.transactionHistory;
    }
  }
  

module.exports = Account;