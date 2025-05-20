// require("./batman");
// require("./superman");

// const chach = require("./caching");
// console.log(chach);

// const fs = require("fs");
// console.log("this is first task");
// fs.readFile("./batman.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//     console.log("inner task");
//   }
// });
// console.log("next task");

// Async patterns are handled in 4 types they are callbacks ,promises, async and await ,event emitters
// const greet = (name) => {
//   console.log("hello" + name + "!");
// };
// const input = (callback) => {
//   const name = "gafoor";
//   callback(name);
// };
// input(greet);

// const fs = require("fs");

// fs.readFile("batman.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log("Error reading file:", err);
//     return;
//   }
//   console.log("File content:", data);
// });

// console.log("Reading file...");

// const fs = require("fs").promises;
// fs.readFile("batman.txt", "utf8")
//   .then((data) => {
//     console.log("file content is:", data);
//   })
//   .catch((err) => {
//     console.log("Error occuried:", err);
//   });

// const EventEmitter = require("events");
// const customEmitter = new EventEmitter();
// customEmitter.on("response", () => {
//   console.log("data recieved");
// });
// customEmitter.emit("response");

// const EventEmitter = require("events");
// const customEmitter = new EventEmitter();
// customEmitter.on("names", (name) => {
//   // const name = "gafoor";
//   const nam = () => {
//     console.log("this is :", name);
//   };
//   nam();
// });
// customEmitter.emit("names", "gafoor");
