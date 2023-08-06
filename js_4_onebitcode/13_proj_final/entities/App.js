class App {
  static #usuarios = ["duze@gmail"];

  static criarUsuario(email) {
    if (App.#usuarios.some((usuario) => usuario === email)) {
      console.log(`O email ${email} já está em uso.`);
    } else {
      App.#usuarios.push(email);
    }
  }
}

console.log(App.criarUsuario("123@gmail"));
console.log(App.criarUsuario("zezindogas@gmail"));
