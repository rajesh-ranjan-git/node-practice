import db from "../utils/dbUtil.js";

class HomeModel {
  constructor(
    houseId,
    houseName,
    housePricePerNight,
    houseLocation,
    houseRating,
    housePhotoURL,
    houseDescription
  ) {
    this.houseId = houseId;
    this.houseName = houseName;
    this.housePricePerNight = housePricePerNight;
    this.houseLocation = houseLocation;
    this.houseRating = houseRating;
    this.housePhotoURL = housePhotoURL;
    this.houseDescription = houseDescription;
  }

  save() {
    return db.execute("INSERT INTO homeslist (houseName, housePricePerNight, houseLocation, houseRating, housePhotoURL, houseDescription) VALUES (?, ?, ?, ?, ?, ?)", [this.houseName, this.housePricePerNight, this.houseLocation, this.houseRating, this.housePhotoURL, this.houseDescription]);
  }

  static fetchAllHomes() {
    return db.execute("SELECT * FROM homeslist");
  }

  static findById(houseId) {
    return db.execute("SELECT * FROM homeslist WHERE houseId = ?", [houseId]);
  }

  static deleteHome(houseId) {
    return db.execute("DELETE FROM homeslist WHERE houseId = ?", [houseId]);
  }
}

export default HomeModel;
