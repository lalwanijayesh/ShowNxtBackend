const { db } = require("./database");
const Athlete = require("../model/Athlete");

const createAthlete = async (
  user_id,
  first_name,
  last_name,
  gender,
  gpa,
  sat,
  act,
  height,
  weight
) => {
  await db.query(
    "INSERT INTO athlete (user_id, first_name, last_name, gender, gpa, sat, act, height, weight) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)",
    [user_id, first_name, last_name, gender, gpa, sat, act, height, weight]
  );
  // TODO use SQL builders above instead of passing args with $
  return getAthleteById(user_id);
};

const getAthleteById = async (user_id) => {
  const res = await db.query("SELECT * FROM athlete WHERE user_id = $1", [
    user_id,
  ])
  return Athlete.createFromDB(res.rows[0]);
};

const getAthletes = async () => {
  const res = await db.query("SELECT * FROM athlete");
  return res.rows.map(row => Athlete.createFromDB(row));
};

module.exports = {
  createAthlete,
  getAthleteById,
  getAthletes,
};
