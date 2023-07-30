// importar class installment
// module.exports

class Loan {
  static #taxaDeJuros;

  constructor(valorDoEmprestimo, dataDeCriacao, numeroDeParcelas) {
    this.valorDoEmprestimo = valorDoEmprestimo;
    this.dataDeCriacao = dataDeCriacao;
    this.numeroDeParcelas = numeroDeParcelas;
    this.parcelasDoEmprestimo = [];
  }

  static get mostrarTaxaDeJuros() {
    return Loan.#taxaDeJuros;
  }

  static set novaTaxaDeJuros(valor) {
    if (typeof valor === "number" && valor >= 0) {
      Loan.#taxaDeJuros = valor;
    }
  }

  calcularParcelas() {}
}

const emprestimo = new Loan(1000, "23/08/2023", 10);
console.log(emprestimo.calcularParcelas());
