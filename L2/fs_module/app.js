const fs = require("fs");

//write to a file
fs.writeFileSync("hello.txt", "Hello, this is a file created by Node.js!");

// read the file
const data = fs.readFileSync("hello.txt");

fs.appendFileSync("hello.txt", "\nThis is an appended text.");

console.log("File context: ", data.toString());
