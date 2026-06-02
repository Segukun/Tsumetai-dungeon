class Hero {
  constructor(name, health, damage, criticalChance) {
    this.name = name;
    this.health = health;
    this.damage = damage;
    this.criticalChance = criticalChance;
  }

  introduce() {
    console.log(`${this.name} enters the dungeon!`);
    console.log(`Health: ${this.health}`);
    console.log(`Damage: ${this.damage}`);
    console.log(`Critical chance: ${this.criticalChance}`);
  }

  receiveDamage(amount) {
    this.health -= amount;

    if (this.health < 0) {
      this.health = 0;
    }

    console.log(`${this.name} took ${amount} damage.`);
    console.log(`${this.name} has ${this.health} health left.`);

    return amount;
  }
}

module.exports = Hero;
