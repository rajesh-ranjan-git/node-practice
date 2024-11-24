import fs from "fs";
import path from "path";
import rootDir from "../utils/pathUtil.js";

const favoritesDataPath = path.join(rootDir, "data", "favorites.json");

class FavoritesModel {
  static getFavorites(callback) {
    fs.readFile(favoritesDataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }
    
  static addToFavorites(houseId, callback) {
    FavoritesModel.getFavorites((favorites) => {
        if (favorites.includes(houseId)) {
          callback("Home is already marked favorite.");
        } else {
          favorites.push(houseId);
          fs.writeFile(favoritesDataPath, JSON.stringify(favorites), callback);
        }
    });
  }
  
  static deleteFromFavorites(houseId, callback) {
    FavoritesModel.getFavorites((favorites) => {
      if (favorites.includes(houseId)) {
        favorites = favorites.filter(fav => fav !== houseId.toString())
        fs.writeFile(favoritesDataPath, JSON.stringify(favorites), callback);
      }
    });
  }
}

export default FavoritesModel;
