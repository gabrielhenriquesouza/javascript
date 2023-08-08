const Deposit = require("./Deposit.js");
const Loan = require("./Loan.js");

module.exports = class Account {
  #saldo = 0;

  constructor(email) {
    this.todosDepositos = [];
    this.todosEmprestimos = [];
    this.todasTranferencias = [];
    this.email = email;
  }

  dataDeCriacao() {
    let dataOriginal = new Date();
    var dia = dataOriginal.getDate();
    var mes = dataOriginal.getMonth() + 1;
    var ano = dataOriginal.getFullYear();
    return (
      (dia < 10 ? "0" : "") +
      dia +
      "/" +
      (mes < 10 ? "0" : "") +
      mes +
      "/" +
      ano
    );
  }

  deposito(valor) {
    let dataDeCriacao = this.dataDeCriacao();
    if (typeof valor === "number" && valor > 0) {
      this.#saldo += valor;
      const deposito = new Deposit(valor, dataDeCriacao);
      this.todosDepositos.push(deposito);
    }
  }

  emprestimo(valor, dataDeCriacao, numeroDeParcelas) {
    if (typeof valor === "number" && valor > 0 && numeroDeParcelas > 0) {
      this.#saldo += valor;
      const emprestimo = new Loan(valor, dataDeCriacao, numeroDeParcelas);
      this.todosEmprestimos.push(emprestimo);
    }
  }

  transferencia(userRemetente, userDestinatario, valor) {
    //posso usar email
    if (userRemetente === this.email && this.#saldo >= valor) {
      this.#saldo -= valor;
      this.todasTranferencias.push(
        `-${valor} transferido para ${userDestinatario}`
      );
    } else if (userRemetente !== this.email) {
      this.#saldo += valor;
      this.todasTranferencias.push(
        `+${valor} transferido para ${userDestinatario}`
      );
    }
  }

  aumentarSaldo(valor) {
    this.#saldo += valor;
  }

  diminuirSaldo(valor) {
    this.#saldo -= valor;
  }

  mostrarSaldo() {
    return console.log(
      this.#saldo,
      this.todosDepositos,
      this.todosEmprestimos,
      this.todasTranferencias
    );
  }
};
