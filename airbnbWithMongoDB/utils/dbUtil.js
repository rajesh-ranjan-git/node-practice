import mysql from "mysql2";

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "airbnb",
})

const poolPromise = pool.promise();

export default poolPromise;