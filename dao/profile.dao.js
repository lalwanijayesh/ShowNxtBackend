const { db } = require("./database");
const Profile = require("../model/Profile");

const createProfile = async (
    userId,
    positionId
) => {
    await db.query(
        "INSERT INTO profile (user_id, position_id) " +
        "VALUES ($1, $2)",
        [userId, positionId]
    ).then();
    // TODO use SQL builders above instead of passing args with $
    return getProfileByAthleteAndPosition(userId, positionId);
};

const getProfilesByAthlete = async (userId) => {
    const res = await db.query("SELECT * FROM profile WHERE user_id = $1", [
        userId,
    ]).then();
    return res.rows.map(row => new Profile(row.profile_id, row.user_id, row.position_id))
  //  return res.rows.map(row => Profile.createFromDB(row));
};

const getProfileByAthleteAndPosition = async (userId, positionId) => {
    console.log(userId, positionId);
    const res = await db.query("SELECT * FROM profile WHERE user_id = $1 AND position_id = $2" , [
        userId, positionId
    ]).then();
    return new Profile(res.rows[0].profile_id, res.rows[0].user_id, res.rows[0].position_id);
}

const getProfiles = async () => {
    const res = await db.query("SELECT * FROM profile");
    return res.rows.map(row => new Profile(row.profile_id, row.user_id, row.position_id))
    //return res.rows.map(row => Profile.createFromDB(row));
};

const getProfileById = async (profileId) => {
    const res = await db.query("SELECT * FROM profile WHERE profile_id = $1", [
        profileId
    ]).then();
    console.log(profileId, res.rows[0]);
    return new Profile(res.rows[0].profile_id, res.rows[0].user_id, res.rows[0].position_id);
    //return Profile.createFromDB(res.rows[0]);
}

module.exports = {
    createProfile,
    getProfileById,
    getProfiles,
    getProfilesByAthlete,
    getProfileByAthleteAndPosition
};
