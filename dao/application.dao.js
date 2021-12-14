const { db } = require('./database');
const Application = require("../model/Application");
const { newProfile } = require("../dao/profile.dao");
/**
 *
 */
const newApplication = (row) => {
    return new Application(newProfile(row), row.school_id, row.position_id);
}

const createApplication = async (profile_id, school_id, position_id) => {
    var res = await db.query("INSERT INTO application (profile_id, school_id, position_id)"
                             + " VALUES ($1, $2, $3) RETURNING application_id",
                             [profile_id, school_id, position_id]);
    return getApplicationById(res.rows[0].application_id);
}

const getApplicationById = async (application_id) => {
    var res = await db.query("SELECT * FROM application WHERE application_id = $1", [application_id]);
    return new Application(newProfile(res.rows[0].profile_id),
                           res.rows[0].school_id,
                           res.rows[0].position_id);
}
const getApplications = async() => {
    var res = await db.query("SELECT * FROM application");
    return res.rows.map(row => new Application(newProfile(row.profile_id),
                                               row.school_id,
                                               row.position_id));
}

const getApplicationsByCoach = async (coachId) => {
    var res = await db.query("SELECT * FROM application WHERE coach_id = $1",
                             [coachId]);
    return res.rows.map(row => new Application(newProfile(row.profile_id),
                                               row.school_id,
                                               row.position_id));
}


/*
// TODO: need to implement "get open position in coach model object"
const getApplicationsByCoach = async (coach, wantedPositions, status) => {
    var res;
    if(status == "unevaluated"){
        res = await db.query("SELECT * FROM application WHERE school = $2 AND sport = $3 AND position IN $4",
                                 [coach.schoolId, coach.sportId, coach.openPositions(wantedPositions)]);
    } else{
        res = await db.query("SELECT * FROM application WHERE school = $2 AND sport = $3 AND position IN $4",
                                 [coach.schoolId, coach.sportId, coach.openPositions(wantedPositions)]);
    }
    return res.rows;
}

 */

const getApplicationByProfile = async (profileId) => {
    var res = await db.query("SELECT * FROM application WHERE profile_id= $1", [profileId]);
    return res.rows.map(row => new Application(row.profile_id,
                                               row.school_id,
                                               row.position_id));
}


module.exports = {
    createApplication,
    getApplications,
    getApplicationById,
    getApplicationsByCoach,
    getApplicationByProfile,
    newApplication
}