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
  // let newBalance;
  if (withdrawAmnt < this.balance) {
    // console.log('withdrawAmnt', withdrawAmnt);
    // console.log('this balance', this.balance);
    this.transaction.push({ withdraw: withdrawAmnt });
    this.balance -= withdrawAmnt;
    // console.log('newBalance', newBalance);
    return `Success: Your account balance is now, £${this.balance}`;
  } else {
    return `you cannot withdraw £${withdrawAmnt}, not enough in the account.`
  }
}

Account.prototype.deposit = function (amount) {
  this.transaction.push({ deposit: amount });
  return this.balance += amount;
}

Account.prototype.viewStatement = function () {
  return this.transaction;
}

Account.prototype.filterTransaction = function (transactionType) {
  // transaction is array of objects -> keys are withdraw or deposit
  const withdraw = this.transaction.filter(val => val.withdraw);
  const deposit = this.transaction.filter(val => val.deposit);
  if (transactionType === 'withdraw') { return withdraw };
  if (transactionType === 'deposit') { return deposit };
}


module.exports = { Account };