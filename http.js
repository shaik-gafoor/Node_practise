// const gafoor = require("http");
// const server = gafoor.createServer((req, res) => {
//   //   res.write("welcome to my first node page");
//   //   res.end("i am done ");
//   if (req.url === "/") {
//     res.end("this is the home page");
//   } else {
//     res.end(`
//         <h1>Oops!</h1>
//         <p>Something went wrong</p>
//         <a href ='/'>go back</a>
//     `);
//   }
// });
// server.listen(5000);

// const http = require("http");
// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.write("this is the home page after installing nodemon");
//   } else if (req.url === "/about") {
//     res.write("this is the about page");
//   } else {
//     res.statusCode = 404;
//     res.write("this page error");
//   }
//   res.end();
//   console.log("request url:", req.url);
//   console.log("HTTP method:", req.method);
//   console.log("request headers:", req.headers);
// });
// server.listen(5000);

//creation of http server
// const http = require("http");
// const server = http.createServer((req, res) => {
//   res.write("this ia a http server");
//   res.end();
// });
// server.listen(4000, () => {
//   console.log("server is listening the port 4000");
// });

// const http = require("http");
// const server = http.createServer((req, res) => {
//   if (req.method == "GET" && req.url == "/") {
//     res.writeHead(200, { "content-type": "text/html" });
//     res.end("<h1>This is Home page</h1>");
//   } else {
//     res.writeHead(404, { "content-type": "text/html" });
//     res.end("<h1>File not found error</h1>");
//   }
// });
const fs = require("fs");

if (req.url === "/" && req.method === "GET") {
  fs.readFile("navbar.html", (err, data) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}
// server.listen(4000, () => {
//   console.log("server is listening the port 4000..");
// });
