module.exports = class Loan {
  static #taxaDeJuros;

  constructor(s) {
    this.s = s;
  }

  static get mostrarTaxaDeJuros() {
    return this.#taxaDeJuros;
  }

  static set definirNovaTaxaDeJuros(porcentagem) {
    this.#taxaDeJuros = porcentagem;
  }
};

const loan = new Loan(1);
loan.definirNovaTaxaDeJuros(10);
loan.mostrarTaxaDeJuros();
