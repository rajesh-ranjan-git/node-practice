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
    HomeModel.fetchAllHomes((registeredHomes) => {
      this.houseId =
        (Number(registeredHomes[registeredHomes.length - 1].houseId) + 1).toString();
      registeredHomes.push(this);
      fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (error) => {
        console.log("File writing concluded, ", error);
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
      const home = homesList.find((home) => home.houseId === houseId);
      callback(home);
    });
  }
}

export default HomeModel;
