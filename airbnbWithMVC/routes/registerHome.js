import express from "express";
import { registeredHomes } from "../utils/data.js";

const registerHome = express.Router();

registerHome.get("/registerHome", (req, res, next) => {
  res.render("registerHome", { pageTitle: "Register Home", currentPage: "registerHome" });
});

registerHome.post("/registerHome", (req, res, next) => {
  console.log("Home registered successful for : ", req.body);
  registeredHomes.push(req.body);
  res.render("registerHomeSuccess", { pageTitle: "Register Home Success", currentPage: "registerHomeSuccess" });
});

export default registerHome;
