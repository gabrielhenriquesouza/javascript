const Deposit = require("./Deposit.js");
const Loan = require("./Loan.js");

class Account {
  #saldo = 0;

  constructor(todosEmprestimos, todasTranferencias, donoDaConta) {
    this.todosDepositos = [];
    this.todosEmprestimos = todosEmprestimos;
    this.todasTranferencias = todasTranferencias;
    this.donoDaConta = donoDaConta;
  }

  deposito(valor) {
    //REFAZER SAPORRA
    const dataAtual = new Date();
    const dia = dataAtual.getDate();
    const mes = dataAtual.getMonth() + 1;
    const ano = dataAtual.getFullYear();

    if (typeof valor === "number" && valor > 0) {
      this.#saldo += valor;
      this.todosDepositos.push(valor);
      const deposito = new Deposit(
        valor,
        `${dia}/${mes}/${ano}`,
        this.todosDepositos
      );
    }
  }

  emprestimo(valor, dataDeCriacao, numeroDeParcelas) {
    if (typeof valor === "number" && valor > 0 && numeroDeParcelas > 0) {
    }
    const emprestimo = new Loan(valor, dataDeCriacao, numeroDeParcelas);
    this.#saldo += valor;
  }

  mostrarSaldo() {
    return console.log(this.#saldo, this.todosDepositos);
  }
}

const conta = new Account();

conta.deposito(500);
conta.deposito(100);
conta.deposito(10);
conta.mostrarSaldo();
