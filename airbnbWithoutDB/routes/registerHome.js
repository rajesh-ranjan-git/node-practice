import express from "express";
import { registeredHomes } from "../utils/data.js";

const registerHome = express.Router();

registerHome.get("/registerHome", (req, res, next) => {
  res.render("registerHome", { pageTitle: "Register Home" });
});

registerHome.post("/registerHome", (req, res, next) => {
  console.log("Home registered successful for : ", req.body);
  registeredHomes.push({ houseName: req.body.houseName });
  res.render("registerHomeSuccess", { pageTitle: "Register Home Success" });
});

export default registerHome;
