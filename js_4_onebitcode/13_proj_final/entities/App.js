const Account = require("./Account");
const User = require("./User");

class App extends Account {
  static #usuarios = ["duze@gmail"];

  static criarUsuario(email, nomeCompleto) {
    if (App.#usuarios.some((usuario) => usuario === email)) {
      console.log(`O email ${email} já está em uso.`);
    } else {
      const usuario = new User(nomeCompleto, email); // <--- ERROR
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
    } else {
      console.log("não encontrado");
    }
  }
}

console.log(App.criarUsuario("123@gmail", "Gabriel"));
console.log(App.criarUsuario("zezindogas@gmail", "Zezao"));

App.deposito("zezindogas@gmail", 100);
/*
App.deposit("isaac@email.com", 100)

App.transfer("isaac@email.com", "lucas@email.com", 20)

App.changeLoanFee(10)
App.takeLoan("juliana@email.com", 2000, 24)
 */
