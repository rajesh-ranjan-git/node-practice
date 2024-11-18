import express from "express";
import homesController from "../controllers/homesController.js";

const index = express.Router();

index.get("/", homesController.getHomes);

export default index;
