const {db} = require("./database");
const Coach = require("../model/Coach");

const createCoach = async (userId, schoolId, sportId, firstName, lastName) => {
    await db.query(
        `INSERT INTO coach (user_id, school_id, sport_id, first_name, last_name) 
                VALUES ($1, $2, $3, $4, $5)`,
        [userId, schoolId, sportId, firstName, lastName]
    );
    // TODO use SQL builders above instead of passing args with $
    return getCoachById(userId);
};

const getCoachById = async (userId) => {
    const res = await db.query(
        `SELECT user_id, school_id, sport_id, first_name, last_name 
                FROM coach WHERE user_id = $1`, [
        userId,
    ]);
    return new Coach(res.rows[0].user_id,
                     res.rows[0].school_id,
                     res.rows[0].sport_id,
                     res.rows[0].first_name,
                     res.rows[0].last_name);
}


module.exports = {
    createCoach,
    getCoachById,
};
