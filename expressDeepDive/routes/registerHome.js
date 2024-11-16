import express from "express";
import path from "path";
import { rootDir } from "../utils/pathUtil.js";
import { registeredHomes } from "../utils/data.js";

const registerHome = express.Router();

registerHome.post("/registerHome", (req, res, next) => {
  console.log("Home registered successful for : ", req.body);
  registeredHomes.push({ houseName: req.body.houseName });
  res.sendFile(path.join(rootDir, "views", "registerHome.html"));
});

export default registerHome;
