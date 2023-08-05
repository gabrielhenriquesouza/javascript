class App {
  #listaDeUsuarios = ["br@gmail", "hue@gmail", "123@gmail"];

  static criarUsuario(email) {
    if (email) {
    }
  }

   pegarListaDeUsuarios() { // <-- transformar em static
    let cloneArray = this.#listaDeUsuarios.slice();
    return cloneArray.length;
  }
}


const instacia = new App();
console.log(instacia.pegarListaDeUsuarios());
