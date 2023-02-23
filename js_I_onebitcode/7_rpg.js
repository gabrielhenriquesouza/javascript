let damage = 0;
let name_character = prompt("Digite o nome do seu personagem: ");
let attack_power_character = prompt(
  "Digite o poder de ataque de seu personagem: "
);
let name_character_opponent = prompt(
  "Digite o nome do personagem adversário: "
);
let life_opponent = prompt("Digite quantos pontos de vida tem seu adversário:");
let defense_opponent = prompt("Digite o poder de defesa do seu adversário:");
let shield_opponent = prompt("O seu adversário possui escudo? (s/n)");

if (attack_power_character > defense_opponent && shield_opponent === "n") {
  damage = attack_power_character - defense_opponent;
}
alert(damage);
