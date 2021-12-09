const { db } = require("./database");
const Profile = require("../model/Profile");
const ProfileMeasurable = require("../model/ProfileMeasurable");

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
    const res = await db.query("SELECT * FROM profile WHERE user_id = $1 AND position_id = $2" , [
        userId, positionId
    ]).then();
    return new Profile(res.rows[0].profile_id, res.rows[0].user_id, res.rows[0].position_id);
}

const getProfileWithMeasurable = async (profileId) => {
    const res = await db.query(
        "SELECT * FROM profile INNER JOIN profile_measurable ON (profile.profile_id = profile_measurable.profile_id)"
        + " WHERE profile.profile_id = $1;", [
            profileId
        ])
    return new Profile(res.rows[0].profile_id, res.rows[0].user_id, res.rows[0].position_id,
                       res.rows.map(row => new ProfileMeasurable(row.profile_id, row.measurable_id, row.value)));
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
    return new Profile(res.rows[0].profile_id, res.rows[0].user_id, res.rows[0].position_id);
    //return Profile.createFromDB(res.rows[0]);
}

module.exports = {
    createProfile,
    getProfileById,
    getProfileWithMeasurable,
    getProfiles,
    getProfilesByAthlete,
    getProfileByAthleteAndPosition
};
