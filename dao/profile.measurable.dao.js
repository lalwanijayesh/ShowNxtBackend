const {db} = require("./database");

const createProfileMeasurable = async (
    profileId,
    measurableId,
    value
) => {
    await db.query(
        "INSERT INTO profile_measurables (profile_id, measurable_id, value) " +
        "VALUES ($1, $2, $3)",
        [profileId, measurableId, value]
    );
    // TODO use SQL builders above instead of passing args with $
    return getProfileMeasurableByProfileAndMeasurable(profileId, measurableId);
};

const getProfileMeasurablesByProfile = async (profileId) => {
    const res = await db.query("SELECT * FROM profile_measurables WHERE profile_id = $1" [
                                   profileId
                                   ]);
    return res.rows;
};

const getProfileMeasurableByProfileAndMeasurable = async (profileId, measurableId) => {
    const res = await db.query(
        "SELECT * FROM profile_measurables WHERE profile_id = $1 AND measurable_id = $2", [
            profileId, measurableId
        ]);
    return res.rows[0];
}

module.exports = {
    createProfileMeasurable,
    getProfileMeasurablesByProfile,
    getProfileMeasurableByProfileAndMeasurable
};
