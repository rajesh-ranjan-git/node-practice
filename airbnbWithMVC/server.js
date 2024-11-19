import express from "express";
import path from "path";
import rootDir from "./utils/pathUtil.js";
import index from "./routes/index.js";
import homesList from "./routes/homesListHandler.js";
import favorites from "./routes/favoritesHandler.js";
import bookings from "./routes/bookingsHandler.js";
import hostHomesList from "./routes/hostHomesListHandler.js";
import registerHome from "./routes/registerHomeHandler.js";
import errorHandler from "./routes/errorHandler.js";

const PORT = process.env.PORT || 8001;

const server = express();

server.set("view engine", "ejs");
server.set("views", "views");

server.use(express.static(path.join(rootDir, "public")));

server.use(express.urlencoded({ extended: true }));

server.use(index);
server.use(homesList);
server.use(favorites);
server.use(bookings);
server.use(hostHomesList);
server.use(registerHome);
server.use(errorHandler);

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
