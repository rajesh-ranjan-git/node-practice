import express from "express";
import { registeredHomes } from "../utils/data.js";

const home = express.Router();

home.get("/", (req, res, next) => {
  res.render("home", {
    registeredHomes: registeredHomes,
    pageTitle: "AirBnB",
  });
});

export default home;
