import FavoritesModel from "../models/favoritesModel.js";
import HomeModel from "../models/homeModel.js";

const getHomes = (req, res, next) => {
  HomeModel.fetchAllHomes().then(registeredHomes => {
      FavoritesModel.getFavorites().then((favorites) => {
        favorites = favorites.map(fav => fav.houseId);
        res.render("index", {
          favorites: favorites,
          registeredHomes: registeredHomes,
          pageTitle: "AirBnB",
          currentPage: "index",
        });
      });
    })
    .catch(error => console.log("Error while fetching homesList from db : ", error));
};

const getHomesList = (req, res, next) => {
  HomeModel.fetchAllHomes().then(homesList => {
    FavoritesModel.getFavorites().then((favorites) => {
      favorites = favorites.map(fav => fav.houseId);
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
  const _id = req.params._id;
  HomeModel.findById(_id).then(home => {
    FavoritesModel.getFavorites().then((favorites) => {
      favorites = favorites.map(fav => fav.houseId);
      res.render("store/homeDetails", {
        favorites: favorites,
        home: home,
        pageTitle: "Home " + _id,
        currentPage: "homeDetails",
      });
    });
  });
};

const getFavoritesList = (req, res, next) => {
  FavoritesModel.getFavorites().then((favorites) => {
    favorites = favorites.map(fav => fav.houseId);
    HomeModel.fetchAllHomes().then(homesList => {
      const favoritesWithDetails = favorites.map((houseId) =>
        homesList.find((home) => home._id.toString() === houseId)
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
  const favorite = new FavoritesModel(houseId);
  favorite.addToFavorites().then(result => {
    console.log("Home added to favorites : ", result);
  }).catch (error => {
    console.log("Error while adding favorites : ", error);
  }).finally(() => {
    res.redirect("/favorites");
  });
};

const getBookings = (req, res, next) => {
  HomeModel.fetchAllHomes().then(bookings => {
    FavoritesModel.getFavorites().then((favorites) => {
      favorites = favorites.map(fav => fav.houseId);
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
