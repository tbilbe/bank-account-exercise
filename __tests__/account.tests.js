const { Account } = require('../src/account.js');

describe("A customer should have a bank account!", () => {
  test("The constructor creates a bank acount with a name attached", () => {
    expect(new Account('Thomas Bilbe')).toBeInstanceOf(Object);
  });
  test("The new account should have a balance", () => {
    const tomsAccount = new Account('thomas bilbe', 100000);
    expect(tomsAccount.owner).toBe('thomas bilbe');
    expect(tomsAccount.openingBalance).toBe(100000);
  });
});

describe("check the balance of the current account", () => {
  let myAccount;
  beforeEach(() => {
    myAccount = new Account('tom and laurens joint acc', 500000)
  });
  test('we can withdraw money from the account', () => {
    expect(myAccount.withdraw(40000)).toBe(`Success: Your account balance is now, £460000`);
    expect(myAccount.withdraw(100000)).toBe(`Success: Your account balance is now, £400000`);
  });
  test('you wont be able to withdraw if the mulah aint there!', () => {
    expect(myAccount.withdraw(499999)).toBe(`Success: Your account balance is now, £1`);
    expect(myAccount.withdraw(2)).toBe(`you cannot withdraw ${withdrawAmnt}, not enough in the account.`)
  });

});

describe("deposit monies from working hard!", () => {
  let myAccount;
  beforeAll(() => {
    myAccount = new Account('laurens acc', 500000)
  });
  test('I just got paid 1 quid', () => {
    myAccount.deposit(1);
    expect(myAccount.balance).toBe(500001);
  });
  test('I made 20 more quid', () => {
    myAccount.deposit(20);
    expect(myAccount.balance).toBe(500021)
  })
  test('Just won the lotto', () => {
    myAccount.deposit(250000);
    expect(myAccount.balance).toBe(750021);
  })
})

describe('viewing how rich i am!', () => {
  let myAccount;
  beforeEach(() => {
    myAccount = new Account('tom bilbe', 100);
  });
  test('How much have i got in the account now?', () => {
    expect(myAccount.balance).toBe(100);
    expect(myAccount.checkBalance).toBe(`You have £100 left in the account.`);
  });
  test('Want to go for a drink? how much have i got?', () => {
    myAccount.withdraw(45);
    expect(myAccount.balance).toBe(55);
    expect(myAccount.checkBalance).toBe(`You have £55 left in the account.`);
  });
});

describe('Bank Statements: what do i do with my monies?', () => {
  let myAcc;
  beforeEach(() => {
    myAcc = new Account('toms acc', 2500);
    myAcc.withdraw(600);
    myAcc.withdraw(30);
    myAcc.deposit(800);
  })
  test('Account data object', () => {
    expect(myAcc.viewStatement()).toEqual([{ withdraw: 600 }, { withdraw: 30 }, { deposit: 800 }]);
    expect(myAcc.checkBalance).toBe(`You have £2670 left in the account.`);
  });
  test('Can i see whats happening with the account?', () => {
    expect(myAcc.viewStatement()[0]).toEqual({ withdraw: 600 })
  });
  test('Does the balance still update correctly?', () => {
    expect(myAcc.balance).toBe(2670);
    myAcc.deposit(30)
    expect(myAcc.balance).toBe(2700);
    myAcc.withdraw(200);
    expect(myAcc.balance).toBe(2500);
  });
})

describe('Filter withdrawl or deposits', () => {
  let myAcc;
  beforeAll(() => {
    myAcc = new Account('toms acc', 2500);
    myAcc.withdraw(600);
    myAcc.withdraw(30);
    myAcc.deposit(800);
    // console.table(myAcc.transaction);
    // console.table(myAcc);
    console.log('my account: ', myAcc);
  });
  test('can i see only withdraws?!', () => {
    expect(myAcc.filterTransaction('withdraw')).toEqual([{ withdraw: 600 }, { withdraw: 30 }]);
  })
  test('can i see only deposits?!', () => {
    expect(myAcc.filterTransaction('deposit')).toEqual([{ deposit: 800 }]);
  })
});