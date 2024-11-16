import express from "express";
import path from "path";
import { rootDir } from "../utils/pathUtil.js";
import { registeredHomes } from "../utils/data.js";

const home = express.Router();

home.get("/", (req, res, next) => {
  console.log(registeredHomes);
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

export default home;
