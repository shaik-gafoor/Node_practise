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

const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("this is the home page after installing nodemon");
  } else if (req.url === "/about") {
    res.write("this is the about page");
  } else {
    res.statusCode = 404;
    res.write("page error");
  }
  res.end();
  console.log("request url:", req.url);
  console.log("HTTP method:", req.method);
  console.log("request headers:", req.headers);
});
server.listen(5000);
