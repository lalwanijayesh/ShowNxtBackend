const { db } = require('./database');
const Evaluation = require("../model/Evaluation");

const makeEvaluation = async (application_id, coach_id, status) => {
    var res = await db.query("INSERT INTO evaluation (application_id, coach_id, status) "
                             + "VALUES ($1, $2, $3) ON CONFLICT (application_id, coach_id) "
                             + "DO UPDATE SET status = $3 RETURNING application_id, coach_id",
                             [application_id, coach_id, status]);
    return getEvaluationByApplicationAndCoach(res.rows[0].application_id, res.rows[0].coach_id);
}

const getEvaluations = async() => {
    var res = await db.query("SELECT * FROM evaluation");
    return res.rows.map(row => new Evaluation(row.application_id,
                                              row.coach_id,
                                              row.status));
}

const getEvaluationsByCoach = async (coach_id) => {
    var res = await db.query("SELECT * FROM evaluation WHERE coach_id = $1",
                             [coach_id]);
    return res.rows.map(row => new Evaluation(row.application_id,
                                              row.coach_id,
                                              row.status));
}

const getEvaluationByApplicationAndCoach = async (application_id, coach_id) => {
    var res = await db.query("SELECT * FROM evaluation WHERE application_id = $1 AND coach_id = $2",
                             [application_id, coach_id]);
    return new Evaluation(res.rows[0].application_id,
                           res.rows[0].coach_id,
                           res.rows[0].status);
}



module.exports = {
    makeEvaluation,
    getEvaluationByApplicationAndCoach,
    getEvaluationsByCoach,
    getEvaluations
}