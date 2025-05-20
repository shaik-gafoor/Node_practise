const path = require("node:path");
console.log(__filename);
console.log(__dirname);

// instead of giving the hole path it will give the lastportion of the file name
console.log(path.basename(__filename));
console.log(path.basename(__dirname));

// display the . extension of the file
console.log(path.extname(__filename));
console.log(path.extname(__dirname));

// we will get an object with file extension,file name ,etcc
console.log(path.parse(__filename));
console.log(path.format(path.parse(__filename)));

console.log(path.isAbsolute(__filename));
console.log(path.isAbsolute("./path.js"));
