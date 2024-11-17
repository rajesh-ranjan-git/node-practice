import { registeredHomes } from "../utils/data.js";

const getHomes = (req, res, next) => {
  console.log("registeredHomes: ", registeredHomes)
  res.render("home", {
    registeredHomes: registeredHomes,
    pageTitle: "AirBnB",
    currentPage : "home"
  });
}

const getRegisterHome = (req, res, next) => {
  res.render("registerHome", { pageTitle: "Register Home", currentPage: "registerHome" });
}

const registerHomeSuccess = (req, res, next) => {
  console.log("Home registered successful for : ", req.body);
  registeredHomes.push(req.body);
  res.render("registerHomeSuccess", { pageTitle: "Register Home Success", currentPage: "registerHomeSuccess" });
}

const homesController = { getHomes, getRegisterHome, registerHomeSuccess };

export default homesController;