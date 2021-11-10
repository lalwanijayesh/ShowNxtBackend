const { db } = require("./database");

const createAthlete = async (
  userId,
  firstName,
  lastName,
  gender,
  gpa,
  sat,
  act,
  height,
  weight
) => {
  await db.query(
    "INSERT INTO athlete (user_id, first_name, last_name, gender, gpa, sat, act, height, weight) " +
      "VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)",
    [userId, firstName, lastName, gender, gpa, sat, act, height, weight]
  );
  // TODO use SQL builders above instead of passing args with $
  return getAthleteById(userId);
};

const getAthleteById = async (userId) => {
  const res = await db.query("SELECT * FROM athlete WHERE user_id = $1", [
    userId,
  ]);
  return res.rows[0];
};

const getAthletes = async () => {
  const res = await db.query("SELECT * FROM athlete");
  return res.rows;
};

module.exports = {
  createAthlete,
  getAthleteById,
  getAthletes,
};
