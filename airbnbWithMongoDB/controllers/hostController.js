import HomeModel from "../models/homeModel.js";
import FavoritesModel from "../models/favoritesModel.js";

const getHostHomesList = (req, res, next) => {
  HomeModel.fetchAllHomes().then(hostHomesList => {
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
    _id,
    houseName,
    housePricePerNight,
    houseLocation,
    houseRating,
    housePhotoURL,
    houseDescription
  } = req.body;
  const home = new HomeModel(
    _id,
    houseName,
    housePricePerNight,
    houseLocation,
    houseRating,
    housePhotoURL,
    houseDescription
  );
  home.save().then(() => {
    console.log("Home registered successfully.")
  });
  res.redirect("/hostHomesList");
};

const getEditHome = (req, res, next) => {
  const _id = req.params._id;
  const editing = req.query.editing === "true";

  HomeModel.findById(_id).then(home => {
    return res.render("host/registerHome", {
      home: home,
      editing: editing,
      pageTitle: "Edit Home",
      currentPage: "hostHomesList",
    });
  }).catch(error => {
    console.log("Home not found for editing.");
    return res.redirect("/hostHomesList");
  });
};

const editHomeSuccess = (req, res, next) => {
  const {
    _id,
    houseName,
    housePricePerNight,
    houseLocation,
    houseRating,
    housePhotoURL,
    houseDescription
  } = req.body;
  const home = new HomeModel(
    _id,
    houseName,
    housePricePerNight,
    houseLocation,
    houseRating,
    housePhotoURL,
    houseDescription
  );
  home.save().then(result => {
    console.log("Home updated successfully : ", result);
  });
  res.redirect("/hostHomesList");
};

const deleteHome = (req, res, next) => {
  const _id = req.params._id;
  HomeModel.deleteHome(_id).then(() => {
    FavoritesModel.deleteFromFavorites(_id).then(() => {
      res.redirect("/hostHomesList");
    }).catch(error => {
      console.log("Error while removing favorites : ", error);
    });
  }).catch(error => {
    console.log("Error while deleting home : ", error);
  });
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
