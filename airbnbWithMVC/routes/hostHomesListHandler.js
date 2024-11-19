import express from "express";
import homesController from "../controllers/homesController.js";

const hostHomesList = express.Router();

hostHomesList.get("/hostHomesList", homesController.getHostHomesList);

export default hostHomesList;
