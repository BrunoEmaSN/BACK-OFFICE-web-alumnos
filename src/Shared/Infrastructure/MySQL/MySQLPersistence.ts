import { createPool } from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

export default createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    decimalNumbers: true
});