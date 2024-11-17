import express from "express";
import homesController from "../controllers/homesController.js";

const home = express.Router();

home.get("/", homesController.getHomes);

export default home;
