
class Application {
    constructor(
        profile,
        schoolId,
        positionId
    ) {
        this._profile = profile;
        this._schoolId = schoolId;
        this._positionId = positionId;
    }

    get profileId() {
        return this._profile;
    }

    set profileId(value) {
        this._profile = value;
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
