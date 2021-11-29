const applicationDao = require("../dao/application.dao");

class Application {
    constructor(
        profileId,
        schoolId,
        sportId,
        positionId
    ) {
        this._profileId = profileId;
        this._schoolId = schoolId;
        this._sportId = sportId;
        this._positionId = positionId;
    }

    get profileId() {
        return this._profileId;
    }

    set profileId(value) {
        this._profileId = value;
    }

    get schoolId() {
        return this._schoolId;
    }

    set schoolId(value) {
        this._schoolId = value;
    }

    get sportId() {
        return this._sportId;
    }

    set sportId(value) {
        this._sportId = value;
    }

    get positionId() {
        return this._positionId;
    }

    set positionId(value) {
        this._positionId = value;
    }

    static async createApplication(profileId, schoolId, sportId, positionId){
        const response = await applicationDao.createApplication(
            profileId,
            schoolId,
            sportId,
            firstName,
            lastName
        );
        return new Application(
            response.user_id,
            response.school_id,
            response.sport_id,
            response.first_name,
            response.last_name
        );
    }
}

module.exports = Application;
