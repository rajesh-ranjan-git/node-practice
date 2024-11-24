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
  res.redirect("/hostHomesList");
};

const hostController = {
  getHostHomesList,
  getRegisterHome,
  registerHomeSuccess,
  getEditHome,
  editHomeSuccess
};

export default hostController;
