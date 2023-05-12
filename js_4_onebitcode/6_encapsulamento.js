class Account {
  #password;
  #balance;
  constructor(user) {
    this.email = user.email;
    this.#password = user.password;
    this.#balance = 500;
  }

  getBalance(email, password) {
    if (this.#authenticate(email, password)) {
      return this.#balance;
    } else {
      console.log("ERRO");
    }
  }

  #authenticate(email, password) {
    return email === this.email && password === this.#password;
  }
}

const user = {
  email: "gabriel@gmail.com",
  password: "12345",
};

const MyAccount = new Account(user);
console.log(MyAccount);

console.log(MyAccount.getBalance("gabriel@gmail.com", "12345"));
