class Character {
  constructor(nome, pontosDeVida, pontosDeAtaque, pontosDeDefesa) {
    this.nome = nome;
    this.pontosDeVida = pontosDeVida;
    this.pontosDeAtaque = pontosDeAtaque;
    this.pontosDeDefesa = pontosDeDefesa;
  }

  atacar(oponente) {
    console.log(`Vida do oponente antes do ataque: ${oponente.pontosDeVida}`);

    const ataqueMenosDefesa = this.pontosDeAtaque - oponente.pontosDeDefesa;
    oponente.pontosDeVida - ataqueMenosDefesa;

    console.log(`Vida do oponente depois do ataque: ${oponente.pontosDeVida}`);
  }
}

class Thief extends Character {
  super(nome, pontosDeVida, pontosDeAtaque, pontosDeDefesa)

  atacar(oponente) {
    console.log(`Vida do oponente antes do ataque: ${oponente.pontosDeVida}`);

    const ataqueMenosDefesa =  (this.pontosDeAtaque - oponente.pontosDeDefesa) * 2;
    oponente.pontosDeVida - ataqueMenosDefesa;

    console.log(`Vida do oponente depois do ataque: ${oponente.pontosDeVida}`);
  }
}

class Mage extends Character {}

class Warrior extends Character {}

// const mage = new Mage(nome, pontosDeVida...)
// const warrior = new Warrior(nome, pontosDeVida...)
// mage.atacar(warrior)
// warrior.atacar(mage)
