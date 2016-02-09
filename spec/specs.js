describe ('BankAccount', function() {
  it ("creates a new account with the given properties", function() {
    var testAccount = new BankAccount("Rita", "Moreno", 100);
    expect(testAccount.bankAccountNo).to.exist;
    expect(testAccount.firstName).to.equal("Rita");
    expect(testAccount.lastName).to.equal("Moreno");
    expect(testAccount.balance).to.equal(100);
  });

  it("allows users to withdraw from bank account", function() {
    var testAccount = new BankAccount("Rita", "Moreno", 100);
    testAccount.withdraw(20);
    expect(testAccount.balance).to.equal(80);
  });

  it("allows users to deposit to thier bank account", function() {
    var testAccount = new BankAccount("Rita", "Moreno", 100);
    testAccount.deposit(35);
    expect(testAccount.balance).to.equal(135)
  });
});
