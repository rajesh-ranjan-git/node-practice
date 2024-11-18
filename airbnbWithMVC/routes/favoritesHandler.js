import express from "express";
import homesController from "../controllers/homesController.js";

const favorites = express.Router();

favorites.get("/", homesController.getHomes);

export default favorites;
