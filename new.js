// const express = require("express");
// const app = express();
// app.get("/", (req, res) => {
//   res.send("this is Home page");
// });
// app.get("/about", (req, res) => {
//   res.status(200).send("this is the about page ");
// });
// app.use((req, res) => {
//   res
//     .status(200)
//     .send("<h1>there is some issue in these come in a short time</h1>");
// });
// app.listen(5000, () => {
//   console.log("this is a expreess server listening port 5000...");
// });

const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "./navbar.html"));
});

app.use((req, res) => {
  res.status(200).send("File not found");
});

app.listen(5000, () => {
  console.log("this is the express page");
});
