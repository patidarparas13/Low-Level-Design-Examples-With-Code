class ATM {
    constructor() {
      this.accounts = {};
      this.denominations = {
        100: 10, // 100 x 10 notes
        500: 10, // 500 x 10 notes
        2000: 10 // 2000 x 10 notes
      };
    }
  
    addAccount(account) {
      this.accounts[account.accountNumber] = account;
    }
  
    getAccount(accountNumber) {
      return this.accounts[accountNumber];
    }
  
    getAvailableBalance() {
      return Object.keys(this.denominations).reduce((total, denomination) => {
        return total + denomination * this.denominations[denomination];
      }, 0);
    }
  
    dispenseCash(amount) {
      let remainingAmount = amount;
      const cashToDispense = {};
  
      for (const denomination of Object.keys(this.denominations).sort((a, b) => b - a)) {
        const count = Math.min(Math.floor(remainingAmount / denomination), this.denominations[denomination]);
        if (count > 0) {
          cashToDispense[denomination] = count;
          remainingAmount -= count * denomination;
          this.denominations[denomination] -= count;
        }
      }
  
      if (remainingAmount > 0) {
        throw new Error('Insufficient denominations to dispense the requested amount.');
      }
  
      return cashToDispense;
    }
  }

module.exports = ATM;