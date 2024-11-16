import express from "express";
import path from "path";
import { rootDir } from "../utils/pathUtil.js";

const contactUs = express.Router();

contactUs.get("/contactUs", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contactUs.html"));
});

contactUs.post("/contactUs", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(rootDir, "views", "contactUsData.html"));
});

export default contactUs;
