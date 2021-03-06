const { db } = require("./database");
const Profile = require("../model/Profile");


const makeProfile = (row) => {
    return new Profile(row.profile_id, row.user_id, row.position_id);
}

const createProfile = async (
    userId,
    positionId
) => {
    const res = await db.query(
        `INSERT INTO profile (user_id, position_id) VALUES ($1, $2) RETURNING profile_id`,
        [userId, positionId]
    );
    // TODO use SQL builders above instead of passing args with $
    return getProfileById(res.rows[0].profile_id);
};

const getProfilesByAthlete = async (userId) => {
    const res = await db.query(
        `SELECT profile_id, profile.user_id, position_id FROM profile 
                INNER JOIN athlete ON (profile.user_id = athlete.user_id) 
                WHERE profile.user_id = $1;`, [
        userId,
    ]);
    return res.rows.map(row => makeProfile(row));
};

const getProfileById = async (profileId) => {
    const res = await db.query(
        `SELECT profile_id, user_id, position_id FROM profile 
                WHERE profile.profile_id = $1;`, [
            profileId
        ]);
    return makeProfile(res.rows[0]);
}

module.exports = {
    createProfile,
    getProfileById,
    getProfilesByAthlete,
};
