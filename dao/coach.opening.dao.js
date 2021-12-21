const {db} = require("./database");
const CoachOpening = require("../model/CoachOpening");

const newCoachOpening = (row) => {
    return new CoachOpening(row.coach_id, row.position_id, row.opening_count);
}

const createCoachOpening = async (
    coach_id,
    position_id,
    opening_count
) => {
    var res = await db.query(
        "INSERT INTO coach_opening (coach_id, position_id, opening_count) " +
        "VALUES ($1, $2, $3) ON CONFLICT (opening_id) DO UPDATE SET opening_count = $3 "
        + "RETURNING opening_id",
        [coach_id, position_id, opening_count]
    );
    // TODO use SQL builders above instead of passing args with $
    return getCoachOpeningById(res.rows[0].opening_id);
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

const getCoachOpenings = async () => {
    var res = await db.query("SELECT * FROM coach_opening");
    return res.rows.map(row => new CoachOpening(row.coach_id,
                                                row.position_id,
                                                row.opening_count));
}

const getCoachOpeningById = async (opening_id) => {
    var res = await db.query(
        "SELECT * FROM coach_opening WHERE opening_id = $1",
        [opening_id]
    )
    return new CoachOpening(res.rows[0].coach_id,
                            res.rows[0].position_id,
                            res.rows[0].opening_count);
}

const getCoachOpeningByCoach = async (coach_id) => {
    var res = await db.query(
        "SELECT * FROM coach_opening WHERE coach_id = $1",
        [coach_id]
    )
    return res.rows.map(row => new CoachOpening(row.coach_id,
                                                row.position_id,
                                                row.opening_count));
}

const getCoachOpeningBySchool = async (school_id) => {
    var res = await db.query(
        "SELECT DISTINCT ON (position_id) coach_id, position_id, opening_count FROM coach_opening "
        + "INNER JOIN coach ON (coach_opening.coach_id = coach.user_id) "
        + "WHERE school_id = $1",
        [school_id]
    );
    return res.rows.map(row => newCoachOpening(row));
}


module.exports = {
    createCoachOpening,
    createCoachOpenings,
    getCoachOpenings,
    getCoachOpeningById,
    getCoachOpeningByCoach,
    getCoachOpeningBySchool,
    newCoachOpening
}