const Deposit = require("./Deposit.js");
const Loan = require("./Loan.js");

class Account {
  #saldo = 0;

  constructor(email) {
    this.todosDepositos = [];
    this.todosEmprestimos = [];
    this.todasTranferencias = [];
    this.email = email;
  }

  deposito(valor) {
    var dia = dataOriginal.getDate();
    var mes = dataOriginal.getMonth() + 1; // Lembre-se que os meses são indexados de 0 a 11
    var ano = dataOriginal.getFullYear();
    console.log(dataAtual);

    if (typeof valor === "number" && valor > 0) {
      this.#saldo += valor;
      const deposito = new Deposit(valor);
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
}

const conta = new Account();
conta.deposito(100);
