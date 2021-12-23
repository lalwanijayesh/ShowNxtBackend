const { db } = require("./database");
const SportOffering = require("../model/SportOffering");

const makeSportOffering = (row) => {
    return new SportOffering(row.offering_id, row.school_id, row.sport_id);
}

const getSportOfferingById = async (sportOfferingId) => {
    const res = await db.query("SELECT * FROM sport_offering WHERE offering_id = $1", [
        sportOfferingId,
    ]);
    return makeSportOffering(res.rows[0]);
};

const getSportOfferings = async () => {
    const res = await db.query("SELECT * FROM sport_offering");
    return res.rows.map(row => makeSportOffering(row));
};

const getSportOfferingsBySchool = async (school_id) => {
    const res = await db.query("SELECT offering_id, school_id, sport_id FROM sport_offering "
                               + "WHERE school_id = $1",
                               [school_id]);
    return res.rows.map(row => makeSportOffering(row));
}

module.exports = {
    getSportOfferingById,
    getSportOfferings,
    getSportOfferingsBySchool
};
