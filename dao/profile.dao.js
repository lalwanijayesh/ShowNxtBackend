const { db } = require("./database");

const createProfile = async (
    userId,
    sportId,
    positionId
) => {
    await db.query(
        "INSERT INTO profile (user_id, sport_id, position_id) " +
        "VALUES ($1, $2, $3)",
        [userId, sportId, positionId]
    );
    // TODO use SQL builders above instead of passing args with $
    return getProfileById(userId);
};

const getProfilesByAthlete = async (userId) => {
    const res = await db.query("SELECT * FROM profile WHERE user_id = $1", [
        userId,
    ]);
    return res.rows;
};

const getProfiles = async () => {
    const res = await db.query("SELECT * FROM profile");
    return res.rows;
};

const getProfileById = async (profileId) => {
    const res = await db.query("SELECT * FROM profile WHERE profile_id = $1", [
        profileId
    ]);
    return res.rows[0];
}

module.exports = {
    createProfile,
    getProfileById,
    getProfiles,
    getProfilesByAthlete
};
