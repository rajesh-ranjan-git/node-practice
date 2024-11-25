import { ObjectId } from "mongodb";
import { getDB } from "../utils/dbUtil.js";

class HomeModel {
  constructor(
    _id,
    houseName,
    housePricePerNight,
    houseLocation,
    houseRating,
    housePhotoURL,
    houseDescription
  ) {
    if (_id) {
      this._id = _id;
    }
    this.houseName = houseName;
    this.housePricePerNight = housePricePerNight;
    this.houseLocation = houseLocation;
    this.houseRating = houseRating;
    this.housePhotoURL = housePhotoURL;
    this.houseDescription = houseDescription;
  }

  save() {
    const db = getDB();
    if (!this._id) {
      return db.collection("homesList").insertOne(this);
    } else {
      const updatedFields = {
        houseName: this.houseName,
        housePricePerNight: this.housePricePerNight,
        houseLocation: this.houseLocation,
        houseRating: this.houseRating,
        houseDescription: this.houseDescription,
        housePhotoURL: this.housePhotoURL,
      }
      return db.collection("homesList").updateOne({ _id: new ObjectId(String(this._id)) }, { $set: updatedFields });
    }
  }

  static fetchAllHomes() {
    const db = getDB();
    return db.collection("homesList").find().toArray();
  }

  static findById(_id) {
    const db = getDB();
    return db.collection("homesList").find({ _id: new ObjectId(String(_id)) }).next();
  }

  static deleteHome(_id) {
    const db = getDB();
    return db.collection("homesList").deleteOne({ _id: new ObjectId(String(_id)) });
  }
}

export default HomeModel;
