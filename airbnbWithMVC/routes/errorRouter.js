import express from "express";
import errorController from "../controllers/errorController.js";

const errorRouter = express.Router();

errorRouter.use("/", errorController);

export default errorRouter;
