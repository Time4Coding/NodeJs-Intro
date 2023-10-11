const fs = require("fs");
const http = require("http");
const generatePassword = require("generate-password");

const hostname = "127.0.0.1";
const port = 3000;

// const createFile = fs.writeFile("welcome.txt", "hello Node", (err) => {
//   if (err) throw err;
//   console.log("file created successfully");
// });

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/html");
//   fs.readFile("./index.html", `utf8`, (error, data) => {
//     if (error) {
//       console.log(error);
//       return;
//     }
//     res.write(data);
//     res.end();
//   });
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

var password = generatePassword.generate({
  length: 10,
  numbers: true,
});

// 'uEyMTw32v9'
console.log(password);
