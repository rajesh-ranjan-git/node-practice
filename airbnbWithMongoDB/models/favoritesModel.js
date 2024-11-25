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
  
  static deleteFromFavorites(_id) {
    const db = getDB();
    return db.collection("favoritesList").deleteOne({ _id: new ObjectId(String(_id)) });
  }
}

export default FavoritesModel;
