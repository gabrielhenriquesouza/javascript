const Account = require("./Account");

module.exports = class Deposit extends Account {
  constructor(valor, dataDeCriacao, todosDepositos) {
    super(todosDepositos);
    this.valor = valor;
    this.dataDeCriacao = dataDeCriacao;
    this.todosDepositos = [];
  }
};
