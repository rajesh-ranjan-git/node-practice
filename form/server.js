const http = require("http");
const requestHandler = require("./requestHandler");

const PORT = process.env.PORT || 8001;

const server = http.createServer(requestHandler);

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
