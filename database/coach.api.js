const { pool } = require("./database");

/**
 * Gets all coaches.
 *
 * @returns coaches
 */
const getCoaches = async () => {
  var res = await pool.query("SELECT * FROM coaches ORDER BY id ASC");
  return res.rows;
};

/**
 * Gets the coach with the supplied id.
 *
 * @param {ID} id the unique coach identifier
 * @returns the coach with the supplied id or null if none found
 */
const getCoachById = async (id) => {
  var res = await pool.query("SELECT * FROM coaches WHERE id = $1", [id]);
  return res.rows[0];
};

// is this function for createCoach correct?

/**
 * Creates a new coach in the database.
 *
 * @param {Number} id the unique id of the user for the coach we are creating
 * @param {School} school the school of the coach we are creating
 * @param {Sport} sport the sport overseen by the coach we are creating
 * @param {String} firstName the first name of the coach we are creating
 * @param {String} lastName the last name of the coach we are creating
 * @returns the coach if the creation is successful, otherwise throws an error
 */
const createCoach = async (id, school, sport, firstName, lastName) => {
  await pool.query(
    "INSERT INTO coaches (id, schoolID, sportID, firstName, lastName) VALUES ($1, $2, $3, $4, $5)",
    [id, school.id, sport.id, firstName, lastName]
  );

  return await getCoachById(id);
};

module.exports = {
  getCoaches,
  getCoachById, 
  createCoach,
}