import express from "express";
import path from "path";
import { rootDir } from "../utils/pathUtil.js";

const addHome = express.Router();

addHome.get("/addHome", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "addHome.html"));
});

export default addHome;
