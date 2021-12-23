const { db } = require('./database');
const Evaluation = require("../model/Evaluation");

const makeEvaluation = async(row) => {
    return new Evaluation(row.application_id, row.coach_id, row.status);
}

const storeEvaluation = async (application_id, coach_id, status) => {
    var res = await db.query("INSERT INTO evaluation (application_id, coach_id, status) "
                             + "VALUES ($1, $2, $3) ON CONFLICT (application_id, coach_id) "
                             + "DO UPDATE SET status = $3 RETURNING application_id, coach_id",
                             [application_id, coach_id, status]);
    return getEvaluationByApplicationAndCoach(res.rows[0].application_id, res.rows[0].coach_id);
}

const getEvaluations = async() => {
    var res = await db.query("SELECT application_id, coach_id, status FROM evaluation");
    return res.rows.map(row => makeEvaluation(row));
}

const getEvaluationsByCoach = async(coach_id, status) => {
    var res = await db.query("SELECT application_id, coach_id, status FROM evaluation "
                             + "WHERE coach_id = $1 AND status = $2",
                             [coach_id,status]);
    return res.rows.map(row => makeEvaluation(row));
}

const getEvaluationByApplicationAndCoach = async (application_id, coach_id) => {
    var res = await db.query("SELECT application_id, coach_id, status FROM evaluation "
                             + "WHERE evaluation.application_id = $1 AND coach_id = $2",
                             [application_id, coach_id]);
    return makeEvaluation(res.rows[0]);
}

module.exports = {
    storeEvaluation,
    getEvaluationByApplicationAndCoach,
    getEvaluationsByCoach,
    getEvaluations
}
