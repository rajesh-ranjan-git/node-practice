import express from "express";
import path from "path";
import { rootDir } from "../utils/pathUtil.js";

const errorHandler = express.Router();

errorHandler.use("/", (req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "error.html"));
});

export default errorHandler;
