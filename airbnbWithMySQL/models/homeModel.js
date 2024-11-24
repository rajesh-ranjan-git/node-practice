import fs from "fs";
import path from "path";
import rootDir from "../utils/pathUtil.js";

const homeDataPath = path.join(rootDir, "data", "homes.json");

class HomeModel {
  constructor(
    houseId,
    houseName,
    housePricePerNight,
    houseLocation,
    houseRating,
    housePhotoURL
  ) {
    this.houseId = houseId;
    this.houseName = houseName;
    this.housePricePerNight = housePricePerNight;
    this.houseLocation = houseLocation;
    this.houseRating = houseRating;
    this.housePhotoURL = housePhotoURL;
  }

  save() {
    HomeModel.fetchAllHomes((homesList) => {
      if (this.houseId) {
        homesList = homesList.map(home => home.houseId === this.houseId ? this : home);
      } else {
        this.houseId =
        (Number(homesList[homesList.length - 1].houseId) + 1).toString();
        homesList.push(this);        
      }
      fs.writeFile(homeDataPath, JSON.stringify(homesList), (error) => {
        console.log("File writing concluded.");
      });
    });
  }

  static fetchAllHomes(callback) {
    fs.readFile(homeDataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }

  static findById(houseId, callback) {
    HomeModel.fetchAllHomes((homesList) => {
      const homeFound = homesList.find((home) => home.houseId === houseId);
      callback(homeFound);
    });
  }

  static deleteHome(houseId, callback) {
    HomeModel.fetchAllHomes((homesList) => {
      homesList = homesList.filter(home => home.houseId !== houseId);      
      fs.writeFile(homeDataPath, JSON.stringify(homesList), callback);
    });
  }
}

export default HomeModel;
