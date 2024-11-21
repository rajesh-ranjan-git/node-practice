import express from "express";
import homesController from "../controllers/homesController.js";

const hostRouter = express.Router();

hostRouter.get("/hostHomesList", homesController.getHostHomesList);
hostRouter.get("/registerHome", homesController.getRegisterHome);
hostRouter.post("/registerHome", homesController.registerHomeSuccess);

export default hostRouter;
