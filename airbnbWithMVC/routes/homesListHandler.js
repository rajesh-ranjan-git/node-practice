import express from "express";
import homesController from "../controllers/homesController.js";

const homesList = express.Router();

homesList.get("/homesList", homesController.getHomesList);

export default homesList;
