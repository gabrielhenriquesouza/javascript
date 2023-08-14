const Account = require("./Account");

module.exports = class User {
  constructor(email, nomeCompleto) {
    this.email = email;
    this.nomeCompleto = nomeCompleto;
    this.conta = new Account(this);
  }
};
