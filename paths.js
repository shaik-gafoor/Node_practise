const path = require("path");
const filePath = "D:Node_practisemodules.js";
console.log(path.basename(filePath));
console.log(path.dirname(filePath));

const fullPath = path.join("users", "admin", "docs", "file.txt");
console.log(fullPath);

const absPath = path.resolve("users", "admin", "docs");
console.log(absPath);

console.log(__dirname);
console.log(__filename);
