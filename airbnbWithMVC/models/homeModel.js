import fs from "fs";
import path from "path";
import rootDir from "../utils/pathUtil.js";

class HomeModel {
  constructor(
    id,
    houseName,
    housePricePerNight,
    houseLocation,
    houseRating,
    housePhotoURL
  ) {
    this.id = id;
    this.houseName = houseName;
    this.housePricePerNight = housePricePerNight;
    this.houseLocation = houseLocation;
    this.houseRating = houseRating;
    this.housePhotoURL = housePhotoURL;
  }

  save() {
    HomeModel.fetchAllHomes((registeredHomes) => {
      registeredHomes.push(this);
      const homeDataPath = path.join(rootDir, "data", "homes.json");
      fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (error) => {
        console.log("File writing concluded, ", error);
      });
    });
  }

  static fetchAllHomes(callback) {
    const homeDataPath = path.join(rootDir, "data", "homes.json");
    fs.readFile(homeDataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }
}

export default HomeModel;
