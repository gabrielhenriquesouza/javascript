class Character {
  constructor(nome, pontosDeVida, pontosDeAtaque, pontosDeDefesa) {
    this.nome = nome;
    this.pontosDeVida = pontosDeVida;
    this.pontosDeAtaque = pontosDeAtaque;
    this.pontosDeDefesa = pontosDeDefesa;
  }

  atacar(oponente) {
    console.log(
      `Vida do(a) ${oponente.nome} antes do ataque: ${oponente.pontosDeVida}`
    );

    const ataqueMenosDefesa = this.pontosDeAtaque - oponente.pontosDeDefesa;
    oponente.pontosDeVida -= ataqueMenosDefesa;

    console.log(
      `Vida do(a) ${oponente.nome} depois do ataque: ${oponente.pontosDeVida}`
    );
  }
}

class Thief extends Character {
  constructor(nome, pontosDeVida, pontosDeAtaque, pontosDeDefesa) {
    super(nome, pontosDeVida, pontosDeAtaque, pontosDeDefesa);
  }

  atacar(oponente) {
    console.log(
      `Vida do(a) ${oponente.nome} antes do ataque: ${oponente.pontosDeVida}`
    );

    const ataqueMenosDefesa =
      (this.pontosDeAtaque - oponente.pontosDeDefesa) * 2;
    oponente.pontosDeVida -= ataqueMenosDefesa;

    console.log(
      `Vida do(a) ${oponente.nome} depois do ataque: ${oponente.pontosDeVida}`
    );
  }
}

class Mage extends Character {
  constructor(nome, pontosDeVida, pontosDeAtaque, pontosDeDefesa) {
    super(nome, pontosDeVida, pontosDeAtaque, pontosDeDefesa);
  }
}

class Warrior extends Character {}

// const mage = new Mage(nome, pontosDeVida...)
// const warrior = new Warrior(nome, pontosDeVida...)
// mage.atacar(warrior)
// warrior.atacar(mage)

const character = new Character("Nastorberto", 1000, 100, 1000);
const thief = new Thief("Mandovacurbe", 1000, 100, 100);
const maguinha = new Mage("xandausclecia", 1000, 100, 60, 140);

console.log(maguinha);
console.log(character);
console.log(thief);

character.atacar(maguinha);
thief.atacar(maguinha);
