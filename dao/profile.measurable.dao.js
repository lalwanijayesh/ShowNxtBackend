const {db} = require("./database");
const ProfileMeasurable = require("../model/ProfileMeasurable");

const createProfileMeasurable = async (
    profileId,
    measurableId,
    value
) => {
    await db.query(
        "INSERT INTO profile_measurable (profile_id, measurable_id, value) " +
        "VALUES ($1, $2, $3)",
        [profileId, measurableId, value]
    );
    // TODO use SQL builders above instead of passing args with $
    return getProfileMeasurableByProfileAndMeasurable(profileId, measurableId);
};

const createProfileMeasurables = async (
    profileId,
    measurableIds,
    values
)=> {
   /*
    await measurableIds.map(async function(m_id, i) {
        await createProfileMeasurable(profileId, m_id, values[i]);
    })
    */
    let count = 0;
    for (let i = 0 ; i < measurableIds.length; i++){
        await createProfileMeasurable(profileId, measurableIds[i], values[i]).then(count++);
    }
    if(count === measurableIds.length){
       return getProfileMeasurablesByProfile(profileId);
    }
}

const getProfileMeasurablesByProfile = async (profileId) => {
    const res = await db.query("SELECT * FROM profile_measurable WHERE profile_id = $1", [
                                   profileId]);
    console.log(res.rows);
    return res.rows.map(row => new ProfileMeasurable(row.profile_id, row.measurable_id, row.value));
};

const getProfileMeasurableByProfileAndMeasurable = async (profileId, measurableId) => {
    const res = await db.query(
        "SELECT * FROM profile_measurable WHERE profile_id = $1 AND measurable_id = $2", [
            profileId, measurableId
        ]);
    console.log(res.rows[0]);
    return new ProfileMeasurable(res.rows[0].profile_id, res.rows[0].measurable_id, res.rows[0].value);
}

module.exports = {
    createProfileMeasurable,
    createProfileMeasurables,
    getProfileMeasurablesByProfile,
    getProfileMeasurableByProfileAndMeasurable
};
