require('dotenv').config()
const Pool = require('pg').Pool

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
})

const getUsers = async () => {
    var res = await pool.query("SELECT * FROM users ORDER BY id ASC");
    return res.rows;
}

const getUserById = async (id) => {
    var res = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    return res.rows[0];
}

const getUserByEmail = async (email) => {
    var res = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    return res.rows[0];
}

module.exports = {
    getUsers,
    getUserById,
    getUserByEmail
}