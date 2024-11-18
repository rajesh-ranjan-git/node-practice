import express from "express";
import homesController from "../controllers/homesController.js";

const registerHome = express.Router();

registerHome.get("/registerHome", homesController.getRegisterHome);

registerHome.post("/registerHome", homesController.registerHomeSuccess);

export default registerHome;
