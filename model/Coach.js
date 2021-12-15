//const coachDao = require("../dao/coach.dao");

class Coach {
    get openPositions() {
        return this._openPositions;
    }

    set openPositions(value) {
        this._openPositions = value;
    }
    constructor(
        userId,
        schoolId,
        sportId,
        firstName,
        lastName,
        openPositions
    ) {
        this._userId = userId;
        this._schoolId = schoolId;
        this._sportId = sportId;
        this._firstName = firstName;
        this._lastName = lastName;
        this._openPositions = openPositions;
    }

    get userId() {
        return this._userId;
    }

    set userId(value) {
        this._userId = value;
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

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }
}

module.exports = Coach; 