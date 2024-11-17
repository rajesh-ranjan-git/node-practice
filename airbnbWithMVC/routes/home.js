import express from "express";
import { registeredHomes } from "../utils/data.js";

const home = express.Router();

home.get("/", (req, res, next) => {
  console.log("registeredHomes: ", registeredHomes)
  res.render("home", {
    registeredHomes: registeredHomes,
    pageTitle: "AirBnB",
    currentPage : "home"
  });
});

export default home;
