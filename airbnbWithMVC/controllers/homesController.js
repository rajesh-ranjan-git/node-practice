import FavoritesModel from "../models/favoritesModel.js";
import HomeModel from "../models/homeModel.js";

const getHomes = (req, res, next) => {
  HomeModel.fetchAllHomes((registeredHomes) => {
    res.render("index", {
      registeredHomes: registeredHomes,
      pageTitle: "AirBnB",
      currentPage: "index",
    });
  });
};

const getHomesList = (req, res, next) => {
  HomeModel.fetchAllHomes((homesList) => {
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

const getFavoritesList = (req, res, next) => {
  FavoritesModel.getFavorites((favorites) => {
    HomeModel.fetchAllHomes((homesList) => {
      const favoritesWithDetails = favorites.map(houseId => homesList.find(home => home.houseId === houseId));
      res.render("store/favoritesList", {
        favoritesWithDetails: favoritesWithDetails,
        pageTitle: "Favorites List",
        currentPage: "favoritesList",
      });
    })
  });
};

const postAddToFavorites = (req, res, next) => {
  FavoritesModel.setFavorites(req.body.houseId, error => {
    if (error) {
      console.log("Error while marking favorite : ", error);
    }
    res.redirect("/favorites");
  });
};

const getBookings = (req, res, next) => {
  HomeModel.fetchAllHomes((bookings) => {
    res.render("store/bookings", {
      bookings: bookings,
      pageTitle: "Bookings",
      currentPage: "bookings",
    });
  });
};

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

const homesController = {
  getHomes,
  getHomesList,
  getHomeDetails,
  getFavoritesList,
  postAddToFavorites,
  getBookings,
  getHostHomesList,
  getRegisterHome,
  registerHomeSuccess,
};

export default homesController;
