const { db } = require("./database");

const getSportById = async (sportId) => {
  const res = await db.query("SELECT * FROM sport WHERE sport_id = $1", [
    sportId,
  ]);
  return res.rows[0];
};

const getSports = async () => {
  const res = await db.query(
    'SELECT sport_id as "sportId", ' +
      "sport_name as name, " +
      "type as gender " +
      "FROM sport"
  );

  return res.rows;
};

module.exports = {
  getSportById,
  getSports,
};
