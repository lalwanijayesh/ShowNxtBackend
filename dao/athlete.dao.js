const { db } = require("./database");

const createAthlete = async (
  userId,
  firstName,
  lastName,
  gender,
  GPA,
  SAT,
  ACT,
  height,
  weight
) => {
  await db.query(
    "INSERT INTO athlete (userId, firstName, lastName, gender, gpa, sat, act, height, weight) " +
      "VALUES ($1, $2, $3, $4)",
    [userId, firstName, lastName, gender, gpa, sat, act, height, weight]
  );
  return getAthleteById(userId);
};

const getAthleteById = async (userId) => {
  const res = await db.query("SELECT * FROM athlete WHERE userId = $1", [
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
