import dotenv from "dotenv";

dotenv.config({path: './.env'});


export const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://cluster0.0qlbckm.mongodb.net/testdb"

export const PORT = process.env.PORT || 5000


