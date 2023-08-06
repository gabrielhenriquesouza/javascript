class App {
  #listaDeUsuarios = ["br@gmail", "hue@gmail", "123@gmail"];

  criarUsuario(email) {
    if (this.#listaDeUsuarios.find((usuario) => usuario.email === email)) {
      console.log(`O email ${email} já está em uso.`);
      return;
    } else {
      console.log("dsfs");
    }
  }

  static criarUsuario(email) {
    if (this.usuarios.some((usuario) => usuario.email === email)) {
      console.log(`O email ${email} já está em uso.`);
      return;
    }
  }
}

const instacia = new App();
console.log(instacia.criarUsuario("br@gmail"));
