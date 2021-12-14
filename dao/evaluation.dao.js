const { db } = require('./database');
const Evaluation = require("../model/Evaluation");
const Application = require("../model/Application");

const newApplication = (row) => {
    return new Application(row.profile_id, row.school_id, row.position_id);
}

const makeEvaluation = async (application_id, coach_id, status) => {
    var res = await db.query("INSERT INTO evaluation (application_id, coach_id, status) "
                             + "VALUES ($1, $2, $3) ON CONFLICT (application_id, coach_id) "
                             + "DO UPDATE SET status = $3 RETURNING application_id, coach_id",
                             [application_id, coach_id, status]);
    return getEvaluationByApplicationAndCoach(res.rows[0].application_id, res.rows[0].coach_id);
}

const getEvaluations = async() => {
    var res = await db.query("SELECT * FROM evaluation INNER JOIN application ON "
                             + "(application.application_id = evaluation.application_id)");
    return res.rows.map(row => new Evaluation(new Application(row),
                                              row.coach_id,
                                              row.status));
}

const getEvaluationsByCoach = async (coach_id) => {
    var res = await db.query("SELECT * FROM evaluation INNER JOIN application ON "
                             + "(application.application_id = evaluation.application_id) INNER JOIN "
                             + "school ON (application.school_id = school.school_id) INNER JOIN coach "
                             + "ON (coach.school_id = school.school_id) WHERE user_id = $1;",
                             [coach_id]);
    return res.rows.map(row => new Evaluation(new Application(row),
                                              row.coach_id,
                                              row.status));
}

const getEvaluationByApplicationAndCoach = async (application_id, coach_id) => {
    var res = await db.query("SELECT * FROM evaluation WHERE application_id = $1 AND coach_id = $2",
                             [application_id, coach_id]);
    return new Evaluation(new Application(res.rows[0]),
                           res.rows[0].coach_id,
                           res.rows[0].status);
}



module.exports = {
    makeEvaluation,
    getEvaluationByApplicationAndCoach,
    getEvaluationsByCoach,
    getEvaluations
}