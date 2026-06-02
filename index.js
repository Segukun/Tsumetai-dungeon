const Tank = require("./Tank");
const Attack = require("./Attack");

console.log("冷たいダンジョン / Tsumetai Dungeon");
console.log("");

const riku = new Tank("Riku", 120, 12, 0.15, 5, 0.5);
const kaito = new Attack("Kaito", 80, 24, 0.35, 2, 20);

riku.introduce();
console.log("");

kaito.introduce();
console.log("");

kaito.basicAttack(riku);
console.log("");

riku.specialAttack();
console.log("");

kaito.specialAttack(riku);
console.log("");

riku.basicAttack(kaito);
