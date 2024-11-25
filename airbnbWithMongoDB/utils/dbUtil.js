import mongo from "mongodb";

const mongoClient = mongo.MongoClient;

const MONGO_URL = "mongodb+srv://root:root@airbnb.ob7py.mongodb.net/?retryWrites=true&w=majority&appName=airbnb";

let _db;

export const mongoConnect = callback => {
    mongoClient.connect(MONGO_URL)
        .then(client => {
            _db = client.db("airbnb");
            callback();
        })
        .catch(error => console.log("Error occurred while connecting MongoDB : ", error));
}

export const getDB = () => {
    if (!_db) {
        console.log("Error occurred while connecting MongoDB");
    }
    return _db;
}