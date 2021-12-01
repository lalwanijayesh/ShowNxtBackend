const { db } = require("./database");

const getPositions = async (sportId) => {
  const res = await db.query(
    'SELECT position_id as "positionId", ' +
      'sport_id as "sportId", ' +
      "position_name as name " +
      "FROM position_master WHERE sport_id = $1",
    [sportId]
  );

  return res.rows;
};

module.exports = {
  getPositions,
};
