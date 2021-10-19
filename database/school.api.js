const { pool } = require('./database');

/**
 * Gets all schools.
 * 
 * @returns School
 */
const getSchools = async () => {
    var res = await pool.query("SELECT * FROM schools ORDER BY id ASC");
    return res.rows;
}

/**
 * Gets the sport with the given id.
 * 
 * @param {ID} id the unique sport identifier
 * @returns the sport with the given id or null if none found
 */
const getSchoolById = async (id) => {
    var res = await pool.query("SELECT * FROM schools WHERE id = $1", [id]);
    return res.rows[0];
}

/**
 * Creates the school
 * 
 * @param {Number} id the schoolID
 * @param {String} name the name of the school 
 * @param {String} location the location of the school
 * @param {Division} division the division 
 * @returns 
 */
const createSchool = async (id, name, location, division) => {
    await pool.query("INSERT INTO sports (id, name, location, division) VALUES ($1, $2, $3, $4)", [id, name, location, division]);
    
    return await getSchoolById(id);
}

module.exports = {
  getSchools,
  getSchoolById, 
  createSchool,
}