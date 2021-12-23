const { db } = require("./database");
const School = require("../model/School");

const makeSchool = async (row) => {
    return new School(row.school_id, row.school_name, row.school_location);
}

const getSchoolById = async (schoolId) => {
  const res = await db.query("SELECT school_id, school_name, school_location FROM school "
                             + "WHERE school.school_id = $1",
                             [schoolId]);
  return makeSchool(res.rows[0]);
};

const getSchools = async () => {
  const res = await db.query("SELECT school_id, school_name, school_location FROM school");
  return res.rows.map(row => makeSchool(row));
};

module.exports = {
  getSchoolById,
  getSchools,
};
