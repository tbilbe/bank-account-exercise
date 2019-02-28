function Account(owner, openingBalance) {
  this.owner = owner;
  this.openingBalance = openingBalance;
  this.balance = 0 + openingBalance;
  this.transaction = [];
}

Account.prototype = {
  get checkBalance() {
    return `You have £${this.balance} left in the account.`
  }
}

Account.prototype.withdraw = function (withdrawAmnt) {
  let newBalance;
  if (withdrawAmnt < this.balance) {
    // console.log('withdrawAmnt', withdrawAmnt);
    // console.log('this balance', this.balance);
    this.balance -= withdrawAmnt;
    // console.log('newBalance', newBalance);
    return `Success: Your account balance is now, £${newBalance}`;
  } else {
    return `you cannot withdraw ${withdrawAmnt}, not enough in the account.`
  }
}

Account.prototype.deposit = function (amount) {
  return this.balance += amount;
}


module.exports = { Account };