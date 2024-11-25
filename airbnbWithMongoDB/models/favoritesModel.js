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
    
  static addToFavorites(_id, callback) {
    FavoritesModel.getFavorites((favorites) => {
        if (favorites.includes(_id)) {
          callback("Home is already marked favorite.");
        } else {
          favorites.push(_id);
          fs.writeFile(favoritesDataPath, JSON.stringify(favorites), callback);
        }
    });
  }
  
  static deleteFromFavorites(_id, callback) {
    FavoritesModel.getFavorites((favorites) => {
      if (favorites.includes(_id)) {
        favorites = favorites.filter(fav => fav !== _id.toString())
        fs.writeFile(favoritesDataPath, JSON.stringify(favorites), callback);
      }
    });
  }
}

export default FavoritesModel;
