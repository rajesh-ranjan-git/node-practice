import express from "express";
import path from "path";
import rootDir from "./utils/pathUtil.js";
import storeRouter from "./routes/storeRouter.js";
import hostRouter from "./routes/hostRouter.js";
import errorRouter from "./routes/errorRouter.js";

const PORT = process.env.PORT || 8001;

const server = express();

server.set("view engine", "ejs");
server.set("views", "views");

server.use(express.static(path.join(rootDir, "public")));

server.use(express.urlencoded({ extended: true }));

server.use(storeRouter);
server.use(hostRouter);
server.use(errorRouter);

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
