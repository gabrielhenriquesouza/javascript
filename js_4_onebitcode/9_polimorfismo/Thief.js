const Character = require("./character");

module.exports = class Thief extends Character {
  attack(targetCharacter) {
    targetCharacter.lifePts -= (this.attack - targetCharacter.defensePts) * 2;
  }
};
