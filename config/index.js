require('dotenv').config();

const {createPool} = require('mysql');

const connection = createPool({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    multipleStatements: true
})

module.exports = connection