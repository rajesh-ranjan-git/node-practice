import express from "express";
import path from "path";
import rootDir from "./utils/pathUtil.js";
import home from "./routes/home.js";
import registerHome from "./routes/registerHome.js";
import errorHandler from "./routes/errorHandler.js";

const PORT = process.env.PORT || 8001;

const server = express();

server.set("view engine", "ejs");
server.set("views", "views");

server.use(express.static(path.join(rootDir, "public")));

server.use(express.urlencoded({ extended: true }));

server.use(home);
server.use(registerHome);
server.use(errorHandler);

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
