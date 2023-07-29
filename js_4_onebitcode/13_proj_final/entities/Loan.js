class Loan {
  static #taxaDeJuros = 10;

  static get mostrarTaxaDeJuros() {
    return Loan.#taxaDeJuros;
  }

  static set novaTaxaDeJuros(valor) {
    if (typeof valor === "number" && valor >= 0) {
      Loan.#taxaDeJuros = valor;
    }
  }
}