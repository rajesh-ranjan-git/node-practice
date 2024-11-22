import express from "express";
import storeController from "../controllers/storeController.js";

const storeRouter = express.Router();

storeRouter.get("/", storeController.getHomes);
storeRouter.get("/homesList", storeController.getHomesList);
storeRouter.get("/bookings", storeController.getBookings);
storeRouter.get("/favorites", storeController.getFavoritesList);
storeRouter.post("/favorites", storeController.postAddToFavorites);
storeRouter.get("/homeDetails/:houseId", storeController.getHomeDetails);

export default storeRouter;
