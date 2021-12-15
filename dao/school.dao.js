const { db } = require("./database");
const School = require("../model/School");
const {newCoachOpening} = require("./coach.opening.dao");

const newCoachOpeningList = (rows) => {
  const created = new Set();
  const ret = [];
  rows.map(row => {
    const co = newCoachOpening(row);
    if(!created.has(row.position_id)){
      created.add(row.position_id);
      ret.push(co);
    }
  });
  return ret;
}

const getSchoolById = async (schoolId) => {
  const res = await db.query("SELECT * FROM school "
                             + "INNER JOIN coach ON (school.school_id = coach.school_id) "
                             + "INNER JOIN coach_opening ON (school.school_id = coach.school_id) "
                             + "WHERE school.school_id = $1", [
    schoolId,
  ]);
  return new School(res.rows[0].school_id,
                      res.rows[0].school_name,
                      res.rows[0].school_location,
                    newCoachOpeningList(res.rows));
};

const getSchools = async () => {
  const res = await db.query("SELECT * FROM school");
  return res.rows.map(row => new School(row.school_id, row.school_name, row.school_location));
};

module.exports = {
  getSchoolById,
  getSchools,
};
