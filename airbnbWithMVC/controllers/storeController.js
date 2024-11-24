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

const setFavorites = (req, res, next) => {
  const houseId = req.body.houseId;
  FavoritesModel.addToFavorites(houseId, error => {
    if (error) {
      console.log("Error while marking favorite : ", error);
      FavoritesModel.deleteFromFavorites(houseId, (error) => {
        console.log("Favorite removed.");
      });
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

const storeController = {
  getHomes,
  getHomesList,
  getHomeDetails,
  getFavoritesList,
  setFavorites,
  getBookings,
};

export default storeController;
