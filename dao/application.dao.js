const { db } = require('./database');
const Application = require("../model/Application");

const makeApplication = (row) => {
    return new Application(row.application_id, row.profile_id, row.school_id, row.position_id);
}

const createApplication = async (profile_id, school_id, position_id) => {
    var res = await db.query("INSERT INTO application (profile_id, school_id, position_id)"
                             + " VALUES ($1, $2, $3) RETURNING application_id",
                             [profile_id, school_id, position_id]);
    return getApplicationById(res.rows[0].application_id);
}

const getApplicationById = async (application_id) => {
    var res = await db.query("SELECT application_id, profile_id, school_id, position_id FROM application "
                             + "WHERE application_id = $1", [application_id]);
    return makeApplication(res.rows[0]);
}

const getNextApplicationByCoach = async (coachId) => {
    var res = await db.query("SELECT application_id, profile_id, school_id, position_id FROM application " +
                             "WHERE application_id = (SELECT MIN(application.application_id) FROM application " +
                             "INNER JOIN coach_opening ON application.position_id = coach_opening.position_id " +
                             "INNER JOIN coach ON coach_opening.coach_id = coach.user_id " +
                             "LEFT OUTER JOIN evaluation ON application.application_id = evaluation.application_id " +
                             "WHERE evaluation.application_id IS NULL AND coach.user_id = $1)",
                             [coachId]);
    return makeApplication(res.rows[0]);
}

const getApplicationByProfile = async (profileId) => {
    var res = await db.query("SELECT application_id, profile_id, school_id, position_id FROM application "
                             + "WHERE profile_id= $1", [profileId]);
    return res.rows.map(row => makeApplication(row));
}

module.exports = {
    createApplication,
    getApplicationById,
    getNextApplicationByCoach,
    getApplicationByProfile,
    makeApplication
}