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
}
module.exports = ProfileMeasurable;
