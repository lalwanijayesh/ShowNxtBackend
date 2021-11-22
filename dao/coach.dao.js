const { db } = require("./database");

const createCoach = async (
  userId,
  schoolId,
  sportId,
  firstName,
  lastName
) => {
  await db.query(
    "INSERT INTO coach (user_id, school_id, sport_id, first_name, last_name) " +
      "VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)",
    [userId, schoolId, sportId, firstName, lastName]
  );
  // TODO use SQL builders above instead of passing args with $
  return getCoachById(userId);
};

const getCoachById = async (userId) => {
  const res = await db.query("SELECT * FROM coach WHERE user_id = $1", [
    userId,
  ]);
  return res.rows[0];
};

const getCoaches = async () => {
  const res = await db.query("SELECT * FROM coach");
  return res.rows;
};

module.exports = {
  createCoach,
  getCoachById,
  getCoach,
};
