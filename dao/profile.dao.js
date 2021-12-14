const { db } = require("./database");
const Profile = require("../model/Profile");
const Athlete = require("../model/Athlete");
const ProfileMeasurable = require("../model/ProfileMeasurable");

const newAthlete = (row) => {
    console.log(row);
    return new Athlete(row.user_id,
                       row.first_name,
                       row.last_name,
                       row.gender,
                       row.gpa,
                       row.sat,
                       row.act,
                       row.height,
                       row.weight);
}


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
    const res = await db.query("SELECT * FROM profile INNER JOIN athlete ON (profile.user_id = athlete.user_id) "
                               + "WHERE profile.user_id = $1;", [
        userId,
    ]).then();
    return res.rows.map(row => new Profile(row.profile_id,
                                           newAthlete(row),
                                           row.position_id));
};

const getProfileByAthleteAndPosition = async (userId, positionId) => {
    const res = await db.query("SELECT * FROM profile INNER JOIN athlete ON (profile.user_id = athlete.user_id) "
                               + "WHERE user_id = $1 AND position_id = $2" , [
        userId, positionId
    ]).then();
    return new Profile(res.rows[0].profile_id, newAthlete(res.rows[0]), res.rows[0].position_id);
}

const getProfileWithMeasurable = async (profileId) => {
    const res = await db.query(
        "SELECT * FROM profile INNER JOIN athlete ON (profile.user_id = athlete.user_id) "
        + "INNER JOIN profile_measurable ON (profile.profile_id = profile_measurable.profile_id) "
        + "WHERE profile.profile_id = $1;", [
            profileId
        ])
    console.log(res.rows);
    return new Profile(res.rows[0].profile_id, newAthlete(res.rows[0]), res.rows[0].position_id,
                       res.rows.map(row => new ProfileMeasurable(row.profile_id,
                                                                 row.measurable_id,
                                                                 row.value)));
}

const getProfiles = async () => {
    const res = await db.query("SELECT * FROM profile INNER JOIN athlete ON (profile.user_id = athlete.user_id)");
    return res.rows.map(row => new Profile(row.profile_id,
                                           newAthlete(row),
                                           row.position_id));
}

const getProfileById = async (profileId) => {
    const res = await db.query("SELECT * FROM profile INNER JOIN athlete ON (profile.user_id = athlete.user_id) "
                               + "WHERE profile_id = $1", [
        profileId
    ]).then();
    return new Profile(res.rows[0].profile_id, newAthlete(res.rows[0]), res.rows[0].position_id);
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
