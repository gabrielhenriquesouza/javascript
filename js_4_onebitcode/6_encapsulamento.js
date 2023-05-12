class Account {
  #password;
  #balance;
  constructor(user) {
    this.email = user.email;
    this.#password = user.password;
    this.#balance = 0;
  }

  getBalance(email, password) {
    if (email === this.email && password === this.#password) {
      return this.#balance;
    } else {
      console.log("ERRO");
    }
  }
}

const user = {
  email: "gabriel@gmail.com",
  password: "12345",
};

const MyAccount = new Account(user);
console.log(MyAccount);

console.log(MyAccount.getBalance("gabriel@gmail.com", "12345"));
