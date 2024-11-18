import HomeModel from "../models/homeModel.js";

const getHomes = (req, res, next) => {
  const registeredHomes = HomeModel.fetchAllHomes((registeredHomes) => {
    res.render("index", {
      registeredHomes: registeredHomes,
      pageTitle: "AirBnB",
      currentPage: "index",
    });
  });
};

const getRegisterHome = (req, res, next) => {
  res.render("host/registerHome", {
    pageTitle: "Register Home",
    currentPage: "registerHome",
  });
};

const registerHomeSuccess = (req, res, next) => {
  console.log("Home registered successful for : ", req.body);

  const {
    houseName,
    housePricePerNight,
    houseLocation,
    houseRating,
    housePhotoURL,
  } = req.body;
  const home = new HomeModel(
    houseName,
    housePricePerNight,
    houseLocation,
    houseRating,
    housePhotoURL
  );
  home.save();

  res.render("host/registerHomeSuccess", {
    pageTitle: "Register Home Success",
    currentPage: "registerHomeSuccess",
  });
};

const homesController = { getHomes, getRegisterHome, registerHomeSuccess };

export default homesController;
