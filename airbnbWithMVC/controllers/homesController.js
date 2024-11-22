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

const getHomeDetails = (req, res, next) => {
  const houseId = req.params.houseId;
  HomeModel.fetchAllHomes((homesList) => {
    const home = homesList.find((home) => home.houseId === houseId);
    res.render("store/homeDetails", {
      home: home,
      pageTitle: "Home " + houseId,
      currentPage: "homeDetails",
    });
  });
};

const getFavorites = (req, res, next) => {
  const favoriteHomes = HomeModel.fetchAllHomes((favoriteHomes) => {
    res.render("store/favoritesList", {
      favoriteHomes: favoriteHomes,
      pageTitle: "Favorites List",
      currentPage: "favoritesList",
    });
  });
};

const postAddToFavorites = (req, res, next) => {
  console.log("Came to add to favorites : ", req.body);
  res.redirect("/favorites");
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
  getHomeDetails,
  getFavorites,
  postAddToFavorites,
  getBookings,
  getHostHomesList,
  getRegisterHome,
  registerHomeSuccess,
};

export default homesController;
