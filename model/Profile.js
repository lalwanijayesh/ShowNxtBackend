//const profileDao = require("../dao/profile.dao");
const transactionDao = require("../dao/transaction.dao");
const profileMeasurableDao = require("../dao/profile.measurable.dao");

class Profile {
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
        sportId,
        positionId
       // measurables,  // list of Measurable Types
       // calendar      // list of Calendar Types
    ) {
        this._profileId = profileId;
        this._userId = userId;
        this._sportId = sportId;
        this._positionId = positionId;
      //  this._measurables = measurables;
       // this._calendar = calendar;
    }

    get profileId() {
        return this._profileId;
    }

    set profileId(value){
        this._profileId = value;
    }

    get userId() {
        return this._userId;
    }

    set userId(value) {
        this._userId = value;
    }

    get positionId() {
        return this._positionId;
    }

    set positionId(value) {
        this._positionId = value;
    }

    get sportId() {
        return this._sportId;
    }

    set sportId(value) {
        this._sportId = value;
    }

    static async createFromDB(row){
        return new Profile(
            row.profile_id,
            row.user_id,
            row.sport_id,
            row.position_id
        );
    }

    static async createProfileFields(profile, measurables, videos, calendar) {
        await transactionDao.startTransaction();

        const newMeasureables = [];
        for( const m of measurables ){
            newMeasureables.push(await profileMeasurableDao.createProfileMeasurable(responseProf.profile_id,
                                                                                    measurables.measurableId,
                                                                                    measurables.value));
        }

        await transactionDao.endTransaction();

        return new Profile(
            responseProf.profile_id,
            responseProf.user_id,
            responseProf.sport_id,
            responseProf.position_id
        );
    }
}

module.exports = Profile;
