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

    const calculadorDeDano = this.pontosDeAtaque - oponente.pontosDeDefesa;
    oponente.pontosDeVida -= calculadorDeDano;

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

    const calculadorDeDano =
      (this.pontosDeAtaque - oponente.pontosDeDefesa) * 2;
    oponente.pontosDeVida -= calculadorDeDano;

    console.log(
      `Vida do(a) ${oponente.nome} depois do ataque: ${oponente.pontosDeVida}`
    );
  }
}

class Mage extends Character {
  constructor(
    nome,
    pontosDeVida,
    pontosDeAtaque,
    pontosDeDefesa,
    pontosDeMagia
  ) {
    super(nome, pontosDeVida, pontosDeAtaque, pontosDeDefesa);
    this.pontosDeMagia = pontosDeMagia;
  }

  atacar(oponente) {
    console.log(
      `Vida do(a) ${oponente.nome} antes do ataque: ${oponente.pontosDeVida}`
    );

    const calculadorDeDano =
      this.pontosDeAtaque + this.pontosDeMagia - oponente.pontosDeDefesa;
    oponente.pontosDeVida -= calculadorDeDano;

    console.log(
      `Vida do(a) ${oponente.nome} depois do ataque: ${oponente.pontosDeVida}`
    );
  }

  curar(aliado) {
    console.log(
      `Vida do(a) ${aliado.nome} antes da cura: ${aliado.pontosDeVida}`
    );

    aliado.pontosDeVida += this.pontosDeMagia * 2;

    console.log(
      `Vida do(a) ${aliado.nome} depois da cura: ${aliado.pontosDeVida}`
    );
  }
}

class Warrior extends Character {
  constructor(
    nome,
    pontosDeVida,
    pontosDeAtaque,
    pontosDeDefesa,
    pontosDeEscudo,
    posicao
  ) {
    super(nome, pontosDeVida, pontosDeAtaque, pontosDeDefesa);
    this.pontosDeEscudo = pontosDeEscudo;
    this.posicao = posicao;
  }

  atacar(oponente) {
    if (this.posicao == true) {
      console.log(
        `Vida do(a) ${oponente.nome} antes do ataque: ${oponente.pontosDeVida}`
      );

      const calculadorDeDano = this.pontosDeAtaque - oponente.pontosDeDefesa;
      oponente.pontosDeVida -= calculadorDeDano;

      console.log(
        `Vida do(a) ${oponente.nome} depois do ataque: ${oponente.pontosDeVida}`
      );
    } else {
      console.log(
        `O ${this.nome} não pode atacar enquanto estiver em posição de defesa.`
      );
    }
  }

  mudarPosicao() {
    if (this.posicao == true) {
      this.posicao = false;
    } else {
      this.posicao = true;
    }
  }
}

const character = new Character("Nastorberto", 1000, 100, 100);
const thief = new Thief("Mandovacurbe", 1000, 100, 100);
const maguinha = new Mage("xandausclecia", 1000, 100, 60, 140);
const warrior = new Warrior("Bandosclaudinei", 2000, 200, 80, 20, false);

console.log(maguinha);
console.log(character);
console.log(thief);
console.log(warrior);

character.atacar(maguinha);
thief.atacar(maguinha);
maguinha.atacar(character);
maguinha.curar(character);
warrior.atacar(maguinha);
warrior.mudarPosicao();
warrior.atacar(maguinha);
