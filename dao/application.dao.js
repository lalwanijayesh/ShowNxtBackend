const { db } = require('./database');
const Application = require("../model/Application");
const { newProfile, newFullProfile } = require("../dao/profile.dao");
/**
 *
 */
const newApplication = (row) => {
    return new Application(row.application_id, newProfile(row), row.school_id, row.position_id);
}

const createApplication = async (profile_id, school_id, position_id) => {
    var res = await db.query("INSERT INTO application (profile_id, school_id, position_id)"
                             + " VALUES ($1, $2, $3) RETURNING application_id",
                             [profile_id, school_id, position_id]);
    return getApplicationById(res.rows[0].application_id);
}

const getApplicationById = async (application_id) => {
    var res = await db.query("SELECT * FROM application "
                             + "INNER JOIN profile ON (application.profile_id = profile.profile_id) "
                             + "INNER JOIN athlete ON (profile.user_id = athlete.user_id) "
                             + "WHERE application_id = $1", [application_id]);
    return newApplication(res.rows[0]);
}
const getApplications = async() => {
    var res = await db.query("SELECT * FROM application "
                             + "INNER JOIN profile ON (application.profile_id = profile.profile_id) "
                             + "INNER JOIN athlete ON (profile.user_id = athlete.user_id)");
    return res.rows.map(row => newApplication(row));
}

const getNextApplicationByCoach = async (coachId) => {
    var res = await db.query("SELECT * FROM application "
                             + "INNER JOIN profile ON (application.profile_id = profile.profile_id) "
                             + "INNER JOIN athlete ON (profile.user_id = athlete.user_id) "
                             + "INNER JOIN profile_measurable ON (profile.profile_id = profile_measurable.profile_id) "
                             + "INNER JOIN profile_videos ON (profile.profile_id = profile_videos.profile_id) "
                             + "WHERE application_id = (SELECT MIN(application_id) FROM application "
                             + "INNER JOIN coach_opening ON application.position_id = coach_opening.position_id "
                             + "INNER JOIN coach ON coach.user_id = coach_opening.coach_id "
                             + "AND application.school_id = coach.school_id WHERE coach_id = $1 AND "
                             + "application_id NOT IN "
                             + "(SELECT application_id FROM evaluation WHERE evaluation.coach_id = $1));",
                             [coachId]);
    return new Application(res.rows[0].application_id,
                           newFullProfile(res.rows),
                           res.rows[0].school_id,
                           res.rows[0].position_id);
}

const getApplicationByProfile = async (profileId) => {
    var res = await db.query("SELECT * FROM application WHERE profile_id= $1", [profileId]);
    return res.rows.map(row => newApplication(row));
}


module.exports = {
    createApplication,
    getApplications,
    getApplicationById,
    getNextApplicationByCoach,
    getApplicationByProfile,
    newApplication
}