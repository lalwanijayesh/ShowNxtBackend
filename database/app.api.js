const { pool } = require('./database');

/**
 * Gets the application information.
 * 
 * @returns the app info
 */
const getAppInfo = async () => {
    var res = await pool.query("SELECT param, value FROM app_config WHERE param = 'name' OR param = 'version'");
    return res.rows;
}

module.exports = {
    getAppInfo
}