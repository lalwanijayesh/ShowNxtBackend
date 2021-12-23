const { db } = require("./database");
const Athlete = require("../model/Athlete");
const makeAthlete = (row) => {
  return new Athlete(row.user_id,
                     row.first_name,
                     row.last_name,
                     row.gender,
                     row.gpa,
                     row.sat,
                     row.act,
                     row.height,
                     row.weight);
}
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
      `INSERT INTO athlete (user_id, first_name, last_name, gender, gpa, sat, act, height, weight) 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
      [user_id, first_name, last_name, gender, gpa, sat, act, height, weight]
  );
  // TODO use SQL builders above instead of passing args with $
  return getAthleteById(user_id);
};

const getAthleteById = async (user_id) => {
  const res = await db.query(
      `SELECT user_id, first_name, last_name, gender, gpa, sat, act, height, weight FROM athlete 
            WHERE user_id = $1`,
      [user_id]);
  return makeAthlete(res.rows[0]);
};


module.exports = {
  createAthlete,
  getAthleteById,
};
