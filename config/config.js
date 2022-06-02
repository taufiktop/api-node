import 'dotenv/config'

const {
    DB_USERNAME,
    DB_PASSWORD,
    DB_NAME,
    DB_HOSTNAME,
    DB_CONNECTION
} = process.env;

const Env = {
    "username"    : DB_USERNAME,
    "password"    : DB_PASSWORD,
    "name"        : DB_NAME,
    "hostname"    : DB_HOSTNAME,
    "connection"  : DB_CONNECTION
}

export default Env;

// module.exports = {
//     "development": {
//         "username": DB_USERNAME,
//         "password": DB_PASSWORD,
//         "database": DB_NAME,
//         "host": DB_HOSTNAME,
//         "dialect": DB_CONNECTION
//     },
//     "staging": {
//         "username": DB_USERNAME,
//         "password": DB_PASSWORD,
//         "database": DB_NAME,
//         "host": DB_HOSTNAME,
//         "dialect": DB_CONNECTION
//     },
//     "production": {
//         "username": DB_USERNAME,
//         "password": DB_PASSWORD,
//         "database": DB_NAME,
//         "host": DB_HOSTNAME,
//         "dialect": DB_CONNECTION
//     }
// }