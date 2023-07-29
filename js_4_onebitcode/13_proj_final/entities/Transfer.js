//COLOCAR EXTENDS DA CLASS USER

module.exports = class Tranfer {
  constructor(userRemetente, userDestinatario, valor, dataDeCriacao) {
    this.userRemetente = userRemetente;
    this.userDestinatario = userDestinatario;
    this.valor = valor;
    this.dataDeCriacao = dataDeCriacao;
  }
};
