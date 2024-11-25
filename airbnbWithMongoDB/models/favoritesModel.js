import { getDB } from "../utils/dbUtil.js";

class FavoritesModel {
  constructor(houseId) {
    this.houseId = houseId;
  }
  
  static getFavorites() {
    const db = getDB();
    return db.collection("favoritesList").find().toArray();
  }
    
  addToFavorites() {
    const db = getDB();
    return db.collection("favoritesList").insertOne(this);
  }
  
  static deleteFromFavorites(id) {
    const db = getDB();
    return db.collection("favoritesList").deleteOne({ houseId: id });
  }
}

export default FavoritesModel;
