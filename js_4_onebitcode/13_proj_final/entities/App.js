const Account = require("./Account");
const User = require("./User");

module.exports = class App extends Account {
  static #usuarios = [];

  static criarUsuario(email, nomeCompleto) {
    if (App.#usuarios.some((usuario) => usuario === email)) {
      console.log(`O email ${email} já está em uso.`);
    } else {
      const usuario = new User(email, nomeCompleto);
      const conta = new Account(email);
      App.#usuarios.push(email);
      console.log(`O email ${email} foi cadastrado com sucesso!`);
    }
  }

  static encontrarUsuario(email) {
    if (App.#usuarios.some((emailUsuario) => emailUsuario === email)) {
      console.log(`Usuário ${email} encontrado.`);
      return true;
    } else {
      console.log(`Usuário ${email} não encontrado`);
      return false;
    }
  }

  static deposito(email, valor) {
    if (this.encontrarUsuario(email) === true) {
      console.log("encontrado");
      Account.efetuarDeposito(valor);
    } else {
      console.log("não encontrado");
    }
  }

  static mostrarUsuarios() {
    console.table(this.#usuarios);
  }
};
