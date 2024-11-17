import express from "express";
import errorController from "../controllers/errorController.js";

const errorHandler = express.Router();

errorHandler.use("/", errorController);

export default errorHandler;
