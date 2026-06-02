const Hero = require("./Hero");

class Attack extends Hero {
  constructor(name, health, damage, criticalChance, specialMultiplier, energyCost) {
    super(name, health, damage, criticalChance);
    this.specialMultiplier = specialMultiplier;
    this.energyCost = energyCost;
  }

  basicAttack(enemy) {
    console.log(`${this.name} used Basic Attack!`);

    let finalDamage = this.damage;
    const isCritical = Math.random() < this.criticalChance;

    if (isCritical) {
      finalDamage *= 2;
      console.log("Critical hit!");
    }

    const damageTaken = enemy.receiveDamage(finalDamage);
    console.log(`The enemy took ${damageTaken} damage.`);
  }

  specialAttack(enemy) {
    console.log(`${this.name} used Special Attack!`);
    console.log(`${this.name} spent ${this.energyCost} energy.`);

    let finalDamage = this.damage * this.specialMultiplier;
    const isCritical = Math.random() < this.criticalChance;

    if (isCritical) {
      finalDamage *= 2;
      console.log("Critical hit!");
    }

    const damageTaken = enemy.receiveDamage(finalDamage);
    console.log(`The enemy took ${damageTaken} damage.`);
  }
}

module.exports = Attack;
