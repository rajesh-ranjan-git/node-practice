import HomeModel from "../models/homeModel.js";

const getHostHomesList = (req, res, next) => {
  HomeModel.fetchAllHomes((hostHomesList) => {
    res.render("host/hostHomesList", {
      hostHomesList: hostHomesList,
      pageTitle: "Homes List",
      currentPage: "hostHomesList",
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
  const {
    houseId,
    houseName,
    housePricePerNight,
    houseLocation,
    houseRating,
    housePhotoURL,
  } = req.body;
  const home = new HomeModel(
    houseId,
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

const hostController = {
  getHostHomesList,
  getRegisterHome,
  registerHomeSuccess,
};

export default hostController;
