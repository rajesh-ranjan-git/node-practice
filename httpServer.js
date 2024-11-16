// import http from "http";
const http = require("http");

const PORT = process.env.PORT || 8001;

const server = http.createServer((req, res) => {
  console.log("req.url", req.url);
  console.log("req.headers", req.headers);
  console.log("res", res);
});

server.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}/...`);
});
