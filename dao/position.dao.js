const { db } = require("./database");

const getPositions = async (sportId) => {
  const res = await db.query(
    "SELECT * FROM position_master WHERE sport_id = $1",
    [sportId]
  );
  return res.rows[0];
};

module.exports = {
  getPositions,
};
