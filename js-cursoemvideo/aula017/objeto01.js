let amigo = {
  nome: "José",
  sexo: "M",
  peso: 85.4,
  engordar(p = 0) {
    console.log("Engordou");
    this.peso += p;
  },
};
amigo.engordar(100);
console.log(`Meu amigo se chama ${amigo.nome} e pesa ${amigo.peso}kg`);
