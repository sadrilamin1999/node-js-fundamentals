const { girls, ages } = require("./girls");
console.log(girls, ages);

const osSystem = require("os");
const { uptime } = require("process");

console.log(osSystem.platform());
console.log(osSystem.homedir());
console.log(osSystem.uptime());
console.log(osSystem.release());
