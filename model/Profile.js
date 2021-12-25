//const profileDao = require("../dao/profile.dao");
const transactionDao = require("../dao/transaction.dao");
const profileMeasurableDao = require("../dao/profile.measurable.dao");

class Profile {
    get userId() {
        return this._userId;
    }

    set userId(value) {
        this._userId = value;
    }
    get videos() {
        return this._videos;
    }

    set videos(value) {
        this._videos = value;
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
        userId,
        positionId,
        measurables,  // list of Measurable Types
        videos
       // calendar      // list of Calendar Types
    ) {
        this._profileId = profileId;
        this._userId = userId;
        this._positionId = positionId;
        this._measurables = measurables;
        this._videos = videos;
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
