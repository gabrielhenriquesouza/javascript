const name_character = prompt("Digite o nome do seu personagem: ");
const attack_power_character = prompt(
  "Digite o poder de ataque de seu personagem: "
);
const name_character_opponent = prompt(
  "Digite o nome do personagem adversário: "
);
let life_opponent = prompt("Digite quantos pontos de vida tem seu adversário:");
let defense_opponent = prompt("Digite o poder de defesa do seu adversário:");
let shield_opponent = prompt("O seu adversário possui escudo? (s/n)");

let damage = 0;
if (attack_power_character > defense_opponent && shield_opponent === "n") {
  damage = attack_power_character - defense_opponent;
} else if (
  attack_power_character > defense_opponent &&
  shield_opponent === "s"
) {
  damage = (attack_power_character - defense_opponent) / 2;
}

life_opponent = life_opponent - damage;

alert(
  name_character +
    " causou " +
    damage +
    " pontos de dano em " +
    name_character_opponent
);
alert(
  name_character +
    "\nPoder de ataque: " +
    attack_power_character +
    "\n\n" +
    name_character_opponent +
    "\nPontos de vida: " +
    life_opponent +
    "\nPoder de defesa: " +
    defense_opponent +
    "\nPossui escudo: " +
    shield_opponent
);
