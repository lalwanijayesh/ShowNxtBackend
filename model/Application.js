
class Application {
    get profileId() {
        return this._profileId;
    }

    set profileId(value) {
        this._profileId = value;
    }
    get applicationId() {
        return this._applicationId;
    }

    set applicationId(value) {
        this._applicationId = value;
    }
    constructor(
        applicationId,
        profileId,
        schoolId,
        positionId
    ) {
        this._profileId = profileId;
        this._schoolId = schoolId;
        this._positionId = positionId;
        this._applicationId = applicationId;
    }



    get schoolId() {
        return this._schoolId;
    }

    set schoolId(value) {
        this._schoolId = value;
    }

    get positionId() {
        return this._positionId;
    }

    set positionId(value) {
        this._positionId = value;
    }
}

module.exports = Application;
