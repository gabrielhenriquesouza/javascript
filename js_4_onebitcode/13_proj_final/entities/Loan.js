// importar class installment
//module.expots

module.exports = class Loan {
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

  calcularParcelas() {
    let parcelas = this.valorDoEmprestimo / this.numeroDeParcelas;

    for (let indice = 1; indice <= this.numeroDeParcelas; indice++) {
      this.parcelasDoEmprestimo.push(
        `${indice}° parcela no valor de R$${parcelas} | Empréstimo criado: ${this.numeroDeParcelas}x de R$${parcelas}`
      );
    }
  }

  mostrarParcelas() {
    return this.parcelasDoEmprestimo;
  }
};
