const { db } = require("./database");
const Sport = require("../model/Sport");

const makeSport = (row) => {
    return new Sport(row.sport_id, row.sport_name, row.gender);
}

const getSportById = async (sportId) => {
    const res = await db.query("SELECT sport_id, sport_name, gender FROM sport "
                               + "WHERE sport_id = $1", [
        sportId,
    ]);
    return makeSport(res.rows[0]);
};

const getSports = async () => {
    const res = await db.query("SELECT sport_id, sport_name, gender FROM sport");
    return res.rows.map(row => makeSport(row));
};

const getSportsBySchool = async(schoolId) => {
    const res = await db.query("SELECT sport.sport_id, sport.sport_name, sport.gender FROM sport "
                               + "INNER JOIN sport_offering "
                               + "ON (sport.sport_id = sport_offering.sport_id) "
                               + "WHERE school_id = $1",
                               [schoolId]);
    return res.rows.map(row => makeSport(row));
}

module.exports = {
    getSportById,
    getSports,
    getSportsBySchool
};
