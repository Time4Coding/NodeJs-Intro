const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 8000;
const hostName = "localhost";

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Content-Type", "text/html");
  let path = "./pictures/";
  if (req.url === "/" || req.url === "/home") {
    path += "index.html";
    res.statusCode = 200;
  } else if (req.url === "/about") {
    path += "about.html";
    res.statusCode = 200;
  } else if (req.url === "/api") {
    path += "data.json";
    res.statusCode = 200;
  } else {
    res.write("<h1>404 not found!</h1>");
    res.end();
  }
  fs.readFile("./pictures/data.json", "UTF-8", (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    }

    res.end(data);
    console.log(JSON.parse(data));
  });
});

server.listen(port, hostName, () => {
  console.log(`server is runing on ${hostName}:${port}`);
});

// console.log(__dirname);
