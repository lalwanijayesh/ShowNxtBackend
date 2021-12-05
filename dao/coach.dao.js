const { db } = require("./database");
const Coach = require("../model/Coach");

const createCoach = async (userId, schoolId, sportId, firstName, lastName) => {
  await db.query(
    "INSERT INTO coach (user_id, school_id, sport_id, first_name, last_name) " +
      "VALUES ($1, $2, $3, $4, $5)",
    [userId, schoolId, sportId, firstName, lastName]
  );
  // TODO use SQL builders above instead of passing args with $
  return getCoachById(userId);
};

const getCoachById = async (userId) => {
  const res = await db.query("SELECT * FROM coach WHERE user_id = $1", [
    userId,
  ]);
  return Coach.createFromDB(res.rows[0]);
};

const getCoaches = async () => {
  const res = await db.query("SELECT * FROM coach");
  return res.rows.map(row => Coach.createFromDB(row));
};

module.exports = {
  createCoach,
  getCoachById,
  getCoaches,
};
