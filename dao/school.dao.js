const { db } = require("./database");

const getSchoolById = async (schoolId) => {
  const res = await db.query("SELECT * FROM school WHERE school_id = $1", [
    schoolId,
  ]);
  return res.rows[0];
};

const getSchools = async () => {
  const res = await db.query(
    'SELECT school_id as "schoolId", ' +
      "school_name as name, " +
      "school_location as location " +
      "FROM school"
  );

  return res.rows;
};

module.exports = {
  getSchoolById,
  getSchools,
};
