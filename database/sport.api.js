const { pool } = require('./database');

/**
 * Gets all sports.
 * 
 * @returns Sport
 */
const getSports = async () => {
    var res = await pool.query("SELECT * FROM sports ORDER BY id ASC");
    return res.rows;
}

/**
 * Gets the sport with the given id.
 * 
 * @param {ID} id the unique sport identifier
 * @returns the sport with the given id or null if none found
 */
const getSportById = async (id) => {
    var res = await pool.query("SELECT * FROM sports WHERE id = $1", [id]);
    return res.rows[0];
}

// QUESTIONS: DO WE NEED GET SPORT NAMES HERE?? DO WE HAVE TO INPUT THE SPORT MANUALLY OR DO WE HAVE SPORT FILE?
/** IF WE INPUT SPORT MANUALLY */
/**
 * Gets the sport by its name
 * 
 * @param {String} name the sport name
 * @returns the sport with the supplied email or null if none found
 */
const getSportsByNames = async (name) => {
    var res = await pool.query("SELECT * FROM sports WHERE name = $1", [name]);
    return res.rows[0];
}

/**
 * Creates a sport in the database.
 * 
 * @param {String} name the name of sport
 * @param {SportGender} type the gender of the sport
 * @returns the sport if successful, otherwise throws an error
 */
const createSport = async (name, type) => {
    await pool.query("INSERT INTO sports (name, type) VALUES ($1, $2)", [name, type]);
    
    return await getSportsByNames(name);
}

/** IF WE HAVE CSV SPORT FILE 
const createSport = async (id, name, type) => {
    await pool.query("INSERT INTO sports (id, name, type) VALUES ($1, $2, $3)", [id, name, type]);
    
    return await getSportById(id);
}
*/

module.exports = {
    getSports,
    getSportById,
    getSportsByNames,
    createSport,
}