class Loan {
  static #taxaDeJuros = 10;

  static get mostrarTaxaDeJuros() {
    return Loan.#taxaDeJuros;
  }

  novaTaxaDeJuros(valor) {
    if (typeof valor === "number" && valor >= 0) {
      Loan.#taxaDeJuros = valor
    }
  }
}
const loan = new Loan();
console.log(`TAXA: ${Loan.mostrarTaxaDeJuros}`);
loan.novaTaxaDeJuros(30);
console.log(`TAXA: ${Loan.mostrarTaxaDeJuros}`);
