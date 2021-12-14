//const profileDao = require("../dao/profile.dao");
const transactionDao = require("../dao/transaction.dao");
const profileMeasurableDao = require("../dao/profile.measurable.dao");

class Profile {
    get athlete() {
        return this._athlete;
    }

    set athlete(value) {
        this._athlete = value;
    }
    get calendar() {
        return this._calendar;
    }

    set calendar(value) {
        this._calendar = value;
    }
    get measurables() {
        return this._measurables;
    }

    set measurables(value) {
        this._measurables = value;
    }
    constructor(
        profileId,
        athlete,
        positionId,
        measurables  // list of Measurable Types
       // videos
       // calendar      // list of Calendar Types
    ) {
        this._profileId = profileId;
        this._athlete = athlete;
        this._positionId = positionId;
        this._measurables = measurables;
       // this._calendar = calendar;
    }

    get profileId() {
        return this._profileId;
    }

    set profileId(value){
        this._profileId = value;
    }

    get positionId() {
        return this._positionId;
    }

    set positionId(value) {
        this._positionId = value;
    }
}

module.exports = Profile;
