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

// Todo: figure out how to do `createCoach`

/**
 * Creates a new coach in the database.
 *
 * @param {String} email the email of the user we are creating
 * @param {UserType} type the type of the user from the UserType enum
 * @returns the user if the creation is successful, otherwise throws an error
 */
const createCoach = async (email, type) => {
  await pool.query("INSERT INTO coaches (email, type) VALUES ($1, $2)", [
    email,
    type,
  ]);

  return await getUserByEmail(email);
};
