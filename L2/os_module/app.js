const os = require("os");

console.log("Operating System: ", os.platform());
console.log("CPU Cores: ", os.cpus().length);
console.log("Free memory: ", os.freemem());
console.log("Total memory: ", os.totalmem());
console.log("System uptime: ", os.uptime());
