require('dotenv').config()
const Pool = require('pg').Pool

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
})

const getAppInfo = async () => {
    var res = await pool.query("SELECT param, value FROM app_config WHERE param = 'name' OR param = 'version'");
    return res.rows;
}

module.exports = {
    getAppInfo
}