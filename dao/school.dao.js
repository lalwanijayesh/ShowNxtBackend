const { db } = require("./database");
const School = require("../model/School");

const getSchoolById = async (schoolId) => {
  const res = await db.query("SELECT * FROM school WHERE school_id = $1", [
    schoolId,
  ]);
  return new School(res.rows[0].school_id,
                      res.rows[0].school_name,
                      res.rows[0].school_location);
};

const getSchools = async () => {
  const res = await db.query("SELECT * FROM school");
  return res.rows.map(row => new School(row.school_id, row.school_name, row.school_location));
};

module.exports = {
  getSchoolById,
  getSchools,
};
