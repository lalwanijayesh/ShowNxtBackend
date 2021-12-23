const {db} = require("./database");
const CoachOpening = require("../model/CoachOpening");

const makeCoachOpening = (row) => {
    return new CoachOpening(row.coach_id, row.position_id, row.opening_count);
}

const createCoachOpening = async (
    coach_id,
    position_id,
    opening_count
) => {
    var res = await db.query(
        "INSERT INTO coach_opening "
        + "(coach_id, position_id, opening_count) "
        + "VALUES ($1, $2, $3) ON CONFLICT (coach_id, position_id) "
        + "DO UPDATE SET opening_count = $3 "
        + "RETURNING coach_id, position_id",
        [coach_id, position_id, opening_count]
    );
    // TODO use SQL builders above instead of passing args with $
    return getCoachOpeningById(res.rows[0].coach_id, res.rows[0].position_id);
};

const createCoachOpenings = async (
    coach_id,
    position_ids,
    opening_counts
) => {
    let count = 0;
    for (let i = 0 ; i < position_ids.length; i++){
        await createCoachOpening(coach_id, position_ids[i], opening_counts[i]).then(count++);
    }
    if(count === position_ids.length){
        return getCoachOpeningByCoach(coach_id);
    }
}

const getCoachOpeningById = async (coach_id, position_id) => {
    var res = await db.query(
        "SELECT coach_id, position_id, opening_count FROM coach_opening "
        + "WHERE coach_id = $1 AND position_id = $2",
        [coach_id, position_id]
    )
    return makeCoachOpening(res.rows[0]);
}

// Selects all of a coach's position openings
const getCoachOpeningByCoach = async (coach_id) => {
    var res = await db.query(
        "SELECT coach_id, position_id, opening_count FROM coach_opening "
        + "WHERE coach_id = $1",
        [coach_id]
    )
    return res.rows.map(row => makeCoachOpening(row));
}

// Selects all the unique open positions at a school
const getCoachOpeningBySchool = async (school_id) => {
    var res = await db.query(
        "SELECT DISTINCT ON (position_id) "
        + "coach_id, position_id, opening_count FROM coach_opening "
        + "INNER JOIN coach ON (coach_opening.coach_id = coach.user_id) "
        + "WHERE school_id = $1",
        [school_id]
    );
    return res.rows.map(row => makeCoachOpening(row));
}


module.exports = {
    createCoachOpening,
    createCoachOpenings,
    getCoachOpeningById,
    getCoachOpeningByCoach,
    getCoachOpeningBySchool,
}