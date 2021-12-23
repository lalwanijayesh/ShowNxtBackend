const {db} = require("./database");
const ProfileMeasurable = require("../model/ProfileMeasurable");

const makeProfileMeasurable = (row) => {
    return new ProfileMeasurable(row.profile_id, row.measurable_id, row.value);
}

const createProfileMeasurable = async (
    profileId,
    measurableId,
    value
) => {
    const res = await db.query(
        `INSERT INTO profile_measurable (profile_id, measurable_id, value) 
                VALUES ($1, $2, $3)
                ON CONFLICT (profile_id, measurable_id)
                DO UPDATE SET value = $3
                RETURNING profile_id, measurable_id`,
        [profileId, measurableId, value]
    );
    // TODO use SQL builders above instead of passing args with $
    return getProfileMeasurableByProfileAndMeasurable(res.rows[0].profile_id, res.rows[0].measurable_id);
};

const createProfileMeasurables = async (
    profileId,
    measurableIds,
    values
)=> {
    console.log(measurableIds);
    let count = 0;
    for (let i = 0 ; i < measurableIds.length; i++){
        await createProfileMeasurable(profileId, measurableIds[i], values[i]).then(count++);
    }
    if(count === measurableIds.length){
       return getProfileMeasurablesByProfile(profileId);
    }
}

const getProfileMeasurablesByProfile = async (profileId) => {
    const res = await db.query(`SELECT profile_id, measurable_id, value FROM profile_measurable 
                                    WHERE profile_id = $1`,
        [profileId]);
    return res.rows.map(row => makeProfileMeasurable(row));
};

const getProfileMeasurableByProfileAndMeasurable = async (profileId, measurableId) => {
    const res = await db.query(
        `SELECT profile_id, measurable_id, value FROM profile_measurable 
WHERE profile_id = $1 AND measurable_id = $2`,
        [profileId, measurableId]);
    return makeProfileMeasurable(res.rows[0]);
}

module.exports = {
    createProfileMeasurable,
    createProfileMeasurables,
    getProfileMeasurablesByProfile,
    getProfileMeasurableByProfileAndMeasurable
};
