const Deposit = require("./Deposit.js");
const Loan = require("./Loan.js");

class Account {
  #saldo = 0;

  constructor(donoDaConta) {
    this.todosDepositos = [];
    this.todosEmprestimos = [];
    this.todasTranferencias = [];
    this.donoDaConta = donoDaConta;
  }

  deposito(valor, dataDeCriacao) {
    if (
      typeof valor === "number" &&
      valor > 0 &&
      typeof dataDeCriacao === "string"
    ) {
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
    if (userRemetente === this.donoDaConta && this.#saldo >= valor) {
      this.#saldo -= valor;
      userDestinatario.#saldo += valor;
      this.todasTranferencias.push(
        `-${valor} transferido para ${userDestinatario}`
      );
    } else if (userRemetente !== this.donoDaConta) {
      this.#saldo += valor;
      userDestinatario.#saldo -= valor;
      this.todasTranferencias.push(
        `+${valor} transferido de ${userDestinatario}`
      );
    }
  }

  mostrarSaldo() {
    return console.log(
      this.#saldo,
      this.todosDepositos,
      this.todosEmprestimos,
      this.todasTranferencias
    );
  }
}

const contaGabriel = new Account("Gabriel");
const contaLucas = new Account("Lucas");

contaGabriel.deposito(500, "20/05/22");
contaGabriel.emprestimo(200, "20/06/23", 7);

contaLucas.deposito(1000, "20/05/22");
contaLucas.emprestimo(100, "20/06/23", 7);
contaGabriel.transferencia(
  contaGabriel.donoDaConta,
  contaLucas.donoDaConta,
  100
);
contaGabriel.mostrarSaldo();
