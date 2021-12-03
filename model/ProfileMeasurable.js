const profileMeasurableDao = require("../dao/profile.measurable.dao");

class ProfileMeasurable {

    constructor(
        profileId,
        measurableId,
        value
    ){
        this._profileId = profileId;
        this._measurableId = measurableId;
        this._value = value;
    }
    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
    }
    get measurableId() {
        return this._measurableId;
    }

    set measurableId(value) {
        this._measurableId = value;
    }
    get profileId() {
        return this._profileId;
    }

    set profileId(value) {
        this._profileId = value;
    }

    static async createProfileMeasurable(profileId, measurableId, value){
        const response = await profileMeasurableDao.createProfileMeasurable(
            profileId, measurableId, value
        );

        return new ProfileMeasurable(
            response.profile_id,
            response.measurable_id,
            response.value
        );
    }
}
module.exports = ProfileMeasurable;
