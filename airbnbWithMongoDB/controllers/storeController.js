import FavoritesModel from "../models/favoritesModel.js";
import HomeModel from "../models/homeModel.js";

const getHomes = (req, res, next) => {
  HomeModel.fetchAllHomes().then(([registeredHomes]) => {
      FavoritesModel.getFavorites((favorites) => {
        res.render("index", {
          favorites: favorites,
          registeredHomes: registeredHomes,
          pageTitle: "AirBnB",
          currentPage: "index",
        });
      });
    })
    .catch(error => console.log("Error while fetching homeslist from db : ", error));
};

const getHomesList = (req, res, next) => {
  HomeModel.fetchAllHomes().then(([homesList]) => {
    FavoritesModel.getFavorites((favorites) => {
      res.render("store/homesList", {
        favorites: favorites,
        homesList: homesList,
        pageTitle: "Homes List",
        currentPage: "homesList",
      });
    });
  });
};

const getHomeDetails = (req, res, next) => {
  const houseId = req.params.houseId;
  HomeModel.findById(houseId).then(([homes]) => {
    const home = homes[0];
    FavoritesModel.getFavorites((favorites) => {
      res.render("store/homeDetails", {
        favorites: favorites,
        home: home,
        pageTitle: "Home " + houseId,
        currentPage: "homeDetails",
      });
    });
  });
};

const getFavoritesList = (req, res, next) => {
  FavoritesModel.getFavorites((favorites) => {
    HomeModel.fetchAllHomes().then(([homesList]) => {
      const favoritesWithDetails = favorites.map((houseId) =>
        homesList.find((home) => home.houseId === houseId)
      );
      res.render("store/favoritesList", {
        favorites: favorites,
        favoritesWithDetails: favoritesWithDetails,
        pageTitle: "Favorites List",
        currentPage: "favoritesList",
      });
    });
  });
};

const setFavorites = (req, res, next) => {
  const houseId = req.body.houseId;
  FavoritesModel.addToFavorites(houseId, (error) => {
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
  HomeModel.fetchAllHomes().then(([bookings]) => {
    FavoritesModel.getFavorites((favorites) => {
      res.render("store/bookings", {
        favorites: favorites,
        bookings: bookings,
        pageTitle: "Bookings",
        currentPage: "bookings",
      });
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
