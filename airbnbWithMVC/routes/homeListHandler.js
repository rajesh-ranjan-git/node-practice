import express from "express";
import homesController from "../controllers/homesController.js";

const homeList = express.Router();

homeList.get("/", homesController.getHomes);

export default homeList;
