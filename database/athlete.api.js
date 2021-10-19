const { pool } = require("./database");

/**
 * Gets all athletes.
 *
 * @returns athletes
 */
const getAthletes = async () => {
  var res = await pool.query("SELECT * FROM athletes ORDER BY id ASC");
  return res.rows;
};

/**
 * Gets the athlete with the supplied id.
 *
 * @param {ID} id the unique athlete identifier
 * @returns the athlete with the supplied id or null if none found
 */
const getAthleteById = async (id) => {
  var res = await pool.query("SELECT * FROM athletes WHERE id = $1", [id]);
  return res.rows[0];
};

/**
 * Creates a new user in the database.
 *
 * @param {Number} id the unique id of the athlete we are creating
 * @param {String} firstName the first name of the athlete we are creating
 * @param {String} lastName the last name of the athlete we are creating
 * @param {SportGender} gender the gender of the sport that the athlete plays
 * @param {Number} gpa the optional GPA of the athlete we are creating
 * @param {Number} sat the optional SAT score of the athlete we are creating
 * @param {Number} act the optional ACT score of the athlete we are creating
 * @param {Number} height the optional height of the athlete we are creating
 * @param {Number} weight the optional weight of the athlete we are creating
 * @returns the athlete if the creation is successful, otherwise throws an error
 */
const createAthlete = async (
  id,
  firstName,
  lastName,
  gender,
  gpa,
  sat,
  act,
  height,
  weight
) => {
  await pool.query(
    "INSERT INTO athletes (id, firstName, lastName, gender, gpa, sat, act, height, weight) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)",
    [id, firstName, lastName, gender, gpa, sat, act, height, weight]
  );

  return await getAthleteById(id);
};

module.exports = {
  getAthletes,
  getAthleteById,
  createAthlete,
};
