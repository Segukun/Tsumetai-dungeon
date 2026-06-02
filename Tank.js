const Hero = require("./Hero");

class Tank extends Hero {
  constructor(name, health, damage, criticalChance, armor, blockChance) {
    super(name, health, damage, criticalChance);
    this.armor = armor;
    this.blockChance = blockChance;
    this.isGuarding = false;
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

  specialAttack() {
    console.log(`${this.name} used Shield Guard!`);

    const willBlock = Math.random() < this.blockChance;

    if (willBlock) {
      this.isGuarding = true;
      console.log(`${this.name} may block the next enemy attack.`);
    } else {
      console.log(`${this.name} tried to guard, but the stance failed.`);
    }
  }

  receiveDamage(amount) {
    if (this.isGuarding) {
      this.isGuarding = false;
      console.log(`${this.name} blocked the attack!`);
      return 0;
    }

    const reducedDamage = amount - this.armor;
    const finalDamage = Math.max(1, reducedDamage);

    console.log(`${this.name}'s armor reduced the damage!`);
    return super.receiveDamage(finalDamage);
  }
}

module.exports = Tank;
