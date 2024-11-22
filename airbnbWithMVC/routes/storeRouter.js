import express from "express";
import homesController from "../controllers/homesController.js";

const storeRouter = express.Router();

storeRouter.get("/", homesController.getHomes);
storeRouter.get("/homesList", homesController.getHomesList);
storeRouter.get("/bookings", homesController.getBookings);
storeRouter.get("/favorites", homesController.getFavorites);
storeRouter.post("/favorites", homesController.postAddToFavorites);
storeRouter.get("/homeDetails/:houseId", homesController.getHomeDetails);

export default storeRouter;
