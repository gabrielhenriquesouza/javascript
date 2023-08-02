const Deposit = require("./Deposit");

class Account {
  #saldo = 0;

  constructor(todosEmprestimos, todasTranferencias, donoDaConta) {
    this.todosDepositos = [];
    this.todosEmprestimos = todosEmprestimos;
    this.todasTranferencias = todasTranferencias;
    this.donoDaConta = donoDaConta;
  }

  deposito(valor) {
    if (typeof valor === "number" && valor > 0) {
      this.#saldo += valor;
      this.todosDepositos.push(valor);
    }
  }

  mostrarSaldo() {
    return console.log(this.#saldo, this.todosDepositos);
  }
}

cons;
