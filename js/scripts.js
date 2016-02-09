function BankAccount(firstName, lastName, balance) {
  this.bankAccountNo = Date().valueOf();
  this.firstName = firstName;
  this.lastName = lastName;
  this.balance = balance;
}

BankAccount.prototype.withdraw = function (amount) {
  return this.balance -= amount;
};

BankAccount.prototype.deposit = function (amount) {
  return this.balance += amount;
};
