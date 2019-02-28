const { Account } = require('../src/account.js');

xdescribe("A customer should have a bank account!", () => {
  test("The constructor creates a bank acount with a name attached", () => {
    expect(new Account('Thomas Bilbe')).toBeInstanceOf(Object);
  });
  test("The new account should have a balance", () => {
    const tomsAccount = new Account('thomas bilbe', 100000);
    expect(tomsAccount.owner).toBe('thomas bilbe');
    expect(tomsAccount.openingBalance).toBe(100000);
  });
});

xdescribe("check the balance of the current account", () => {
  let myAccount;
  beforeEach(() => {
    myAccount = new Account('tom and laurens joint acc', 500000)
  });
  test('we can withdraw money from the account', () => {
    expect(myAccount.withdraw(40000)).toBe(`Success: Your account balance is now, £460000`);
    expect(myAccount.withdraw(100000)).toBe(`Success: Your account balance is now, £400000`);
  });

});

xdescribe("deposit monies from working hard!", () => {
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

xdescribe('viewing how rich i am!', () => {
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