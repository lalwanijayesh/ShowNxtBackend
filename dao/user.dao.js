const { db } = require('./database');

/**
 * Gets all users.
 * 
 * @returns users
 */
const getUsers = async () => {
    var res = await db.query("SELECT * FROM users ORDER BY id ASC");
    return res.rows;
}

/**
 * Gets the user with the supplied id.
 * 
 * @param {ID} id the unique user identifier
 * @returns the user with the supplied id or null if none found
 */
const getUserById = async (id) => {
    var res = await db.query("SELECT * FROM users WHERE id = $1", [id]);
    return res.rows[0];
}

/**
 * Gets the user with a specific email.
 * 
 * @param {String} email the user's email
 * @returns the user with the supplied email or null if none found
 */
const getUserByEmail = async (email) => {
    var res = await db.query("SELECT * FROM users WHERE email = $1", [email]);
    return res.rows[0];
}

/**
 * Creates a new user in the database.
 * 
 * @param {String} email the email of the user we are creating
 * @param {UserType} type the type of the user from the UserType enum
 * @returns the user if the creation is successful, otherwise throws an error
 */
const createUser = async (email, type) => {
    await db.query("INSERT INTO users (email, type) VALUES ($1, $2)", [email, type]);
    return await getUserByEmail(email);
}

module.exports = {
    getUsers,
    getUserById,
    getUserByEmail,
    createUser
}