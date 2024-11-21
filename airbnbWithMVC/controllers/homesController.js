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

const getHomesList = (req, res, next) => {
  const homesList = HomeModel.fetchAllHomes((homesList) => {
    res.render("store/homesList", {
      homesList: homesList,
      pageTitle: "Homes List",
      currentPage: "homesList",
    });
  });
};

const getFavorites = (req, res, next) => {
  const favoriteHomes = HomeModel.fetchAllHomes((favoriteHomes) => {
    res.render("store/favorites", {
      favoriteHomes: favoriteHomes,
      pageTitle: "Favorites",
      currentPage: "favorites",
    });
  });
};

const getBookings = (req, res, next) => {
  const bookings = HomeModel.fetchAllHomes((bookings) => {
    res.render("store/bookings", {
      bookings: bookings,
      pageTitle: "Bookings",
      currentPage: "bookings",
    });
  });
};

const getHostHomesList = (req, res, next) => {
  const hostHomesList = HomeModel.fetchAllHomes((hostHomesList) => {
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
  console.log("Home registered successful for : ", req.body);

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

const homesController = {
  getHomes,
  getHomesList,
  getFavorites,
  getBookings,
  getHostHomesList,
  getRegisterHome,
  registerHomeSuccess,
};

export default homesController;
