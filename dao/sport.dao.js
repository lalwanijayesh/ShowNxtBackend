const { db } = require("./database");
const Sport = require("../model/Sport");

const getSportById = async (sportId) => {
    const res = await db.query("SELECT * FROM sport WHERE sport_id = $1", [
        sportId,
    ]);
    return new Sport(res.rows[0].sport_id,
                     res.rows[0].sport_name,
                     res.rows[0].gender);
};

const getSports = async () => {
    const res = await db.query("SELECT * FROM sport");
    return res.rows.map(row => new Sport(row.sport_id, row.sport_name, row.gender));
};

module.exports = {
    getSportById,
    getSports
};
