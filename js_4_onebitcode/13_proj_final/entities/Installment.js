module.exports = class installment {
  constructor(valorDaParcela, numero) {
    this.valorDaParcela = valorDaParcela;
    this.numero = numero;
    this.situacao = "pendente";
  }
};
