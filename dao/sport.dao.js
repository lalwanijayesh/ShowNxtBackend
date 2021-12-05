const { db } = require("./database");
const Sport = require("../model/Sport");

const getSportById = async (sportId) => {
    const res = await db.query("SELECT * FROM sport WHERE sport_id = $1", [
        sportId,
    ]);
    return Sport.createFromDB(res.rows[0]);
};

const getSports = async () => {
    const res = await db.query("SELECT * FROM sport");
    return res.rows.map(row => Sport.createFromDB(row));
};

module.exports = {
    getSportById,
    getSports,
};
