import Account from "./Account.js";

class App extends Account {
  static #usuarios = ["duze@gmail"];

  static criarUsuario(email) {
    if (App.#usuarios.some((usuario) => usuario === email)) {
      console.log(`O email ${email} já está em uso.`);
    } else {
      App.#usuarios.push(email);
      console.log(`O email ${email} foi cadastrado com sucesso!`);
    }
  }

  static encontrarUsuario(email) {
    if (App.#usuarios.some((emailUsuario) => emailUsuario === email)) {
      console.log(`Usuário ${email} encontrado.`);
    } else {
      console.log(`Usuário ${email} não encontrado`);
    }
  }

  static deposit(email, valor) {}
}

console.log(App.criarUsuario("123@gmail"));
console.log(App.criarUsuario("zezindogas@gmail"));
App.encontrarUsuario("zezindogas@gmail");

/*
App.deposit("isaac@email.com", 100)

App.transfer("isaac@email.com", "lucas@email.com", 20)

App.changeLoanFee(10)
App.takeLoan("juliana@email.com", 2000, 24)
 */
