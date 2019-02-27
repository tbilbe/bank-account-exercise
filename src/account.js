function Account(owner, openingBalance) {
  this.owner = owner;
  this.openingBalance = openingBalance;
  this.balance = 0 + openingBalance;
  this.transaction = [];
}

Account.prototype.withdraw = function (withdrawAmnt) {
  let newBalance;
  if (withdrawAmnt < this.balance) {
    console.log('withdrawAmnt', withdrawAmnt);
    console.log('this balance', this.balance);
    newBalance = this.balance - withdrawAmnt;
    console.log('newBalance', newBalance);
    return `Success: Your account balance is now, £${newBalance}`;
  }
}

Account.prototype.deposit = function (amount) {
  return this.balance += amount;
}


module.exports = { Account };