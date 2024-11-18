import express from "express";
import homesController from "../controllers/homesController.js";

const hostHomeList = express.Router();

hostHomeList.get("/", homesController.getHomes);

export default hostHomeList;
