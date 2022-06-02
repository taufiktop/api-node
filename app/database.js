import { Sequelize } from "sequelize";
import Env from "../config/config.js";
 
// create connection
const db = new Sequelize(
    Env.name, 
    Env.username, 
    Env.password,
    {
        host: Env.hostname,
        dialect: Env.connection

    }
);

export default db;