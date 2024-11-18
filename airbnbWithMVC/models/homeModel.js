import registeredHomes from "../utils/data.js";

class HomeModel {
    constructor(houseName, housePricePerNight, houseLocation, houseRating, housePhotoURL) {
        this.houseName = houseName;
        this.housePricePerNight = housePricePerNight;
        this.houseLocation = houseLocation;
        this.houseRating = houseRating;
        this.housePhotoURL = housePhotoURL;
    }

    save() {
        registeredHomes.push(this);
    }

    static fetchAllHomes() {
        return registeredHomes;
    }
}

export default HomeModel;