const path = require("path");

console.log("File Name:", path.basename(__filename));
console.log("Directory Name:", path.dirname(__filename));
console.log("File Extension:", path.extname(__filename));

console.log("File Name:", path.basename(__dirname));
console.log("Directory Name:", path.dirname(__dirname));
console.log("File Extension:", path.extname(__dirname));
