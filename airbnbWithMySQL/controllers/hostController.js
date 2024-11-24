import FavoritesModel from "../models/favoritesModel.js";
import HomeModel from "../models/homeModel.js";

const getHostHomesList = (req, res, next) => {
  HomeModel.fetchAllHomes().then(([hostHomesList]) => {
    res.render("host/hostHomesList", {
      hostHomesList: hostHomesList,
      pageTitle: "Homes List",
      currentPage: "hostHomesList",
    });
  });
};

const getRegisterHome = (req, res, next) => {
  res.render("host/registerHome", {
    editing: false,
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
    houseDescription
  } = req.body;
  const home = new HomeModel(
    houseId,
    houseName,
    housePricePerNight,
    houseLocation,
    houseRating,
    housePhotoURL,
    houseDescription
  );
  home.save();
  res.redirect("/hostHomesList");
};

const getEditHome = (req, res, next) => {
  const houseId = req.params.houseId;
  const editing = req.query.editing === "true";

  HomeModel.findById(houseId, (home) => {
    if (!home) {
      console.log("Home not found for editing.");
      return res.redirect("/hostHomesList");
    }
    res.render("host/registerHome", {
      home: home,
      editing: editing,
      pageTitle: "Edit Home",
      currentPage: "hostHomesList",
    });
  });
};

const editHomeSuccess = (req, res, next) => {
  const {
    houseId,
    houseName,
    housePricePerNight,
    houseLocation,
    houseRating,
    housePhotoURL,
    houseDescription
  } = req.body;
  const home = new HomeModel(
    houseId,
    houseName,
    housePricePerNight,
    houseLocation,
    houseRating,
    housePhotoURL,
    houseDescription
  );
  home.save();
  res.redirect("/hostHomesList");
};

const deleteHome = (req, res, next) => {
  const houseId = req.params.houseId;
  HomeModel.deleteHome(houseId).then(() => {
    res.redirect("/hostHomesList");
  }).catch(error => {
    console.log("Error while deleting home : ", error);
  });
  // FavoritesModel.deleteFromFavorites(houseId, (error) => {
  //   console.log("Favorite removed.");
  // });
}

const hostController = {
  getHostHomesList,
  getRegisterHome,
  registerHomeSuccess,
  getEditHome,
  editHomeSuccess,
  deleteHome
};

export default hostController;
