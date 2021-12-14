const { db } = require("./database");
const Position = require("../model/Position");



const getPositionById = async (positionId) => {
    const res = await db.query("SELECT * FROM position_master WHERE position_id = $1", [
        positionId,
    ]);
    return new Position(res.rows[0].position_id,
                     res.rows[0].sport_id,
                     res.rows[0].position_name);
};

const getPositions = async () => {
    const res = await db.query("SELECT * FROM position_master");
    return res.rows.map(row => new Position(row.position_id, row.sport_id, row.position_name));
};

const getPositionBySport = async (sportId) => {
    const res = await db.query("SELECT * FROM position_master WHERE sport_id = $1", [sportId]);
    return res.rows.map(row => new Position(row.position_id, row.sport_id, row.position_name));
}

module.exports = {
    getPositionById,
    getPositions,
    getPositionBySport
};
