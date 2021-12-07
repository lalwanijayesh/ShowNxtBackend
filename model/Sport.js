class Sport {
    get gender() {
        return this._gender;
    }

    set gender(value) {
        this._gender = value;
    }
    get sportName() {
        return this._sportName;
    }

    set sportName(value) {
        this._sportName = value;
    }
    get sportId() {
        return this._sportId;
    }

    set sportId(value) {
        this._sportId = value;
    }
    constructor(
        sportId,
        sportName,
        gender
    ) {
        this._sportId = sportId;
        this._sportName = sportName;
        this._gender = gender;
    }
}

module.exports = Sport;
