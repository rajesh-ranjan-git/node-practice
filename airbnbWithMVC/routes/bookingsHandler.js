import express from "express";
import homesController from "../controllers/homesController.js";

const bookings = express.Router();

bookings.get("/bookings", homesController.getBookings);

export default bookings;
