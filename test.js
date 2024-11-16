const http = require("http");
const handler = require("./handler");

const server = http.createServer(handler);

const PORT = process.env.PORT || 8001;

server.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
