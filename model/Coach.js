const coachDao = require("../dao/coach.dao");

class Coach {
    constructor(
        userId,
        schoolId,
        sportId,
        firstName,
        lastName
    ) {
        this._userId = userId;
        this._schoolId = schoolId;
        this._sportId = sportId;
        this._firstName, = firstName;
        this._lastName = lastName;
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

    static async createCoach(userId, schoolId, sportId, firstName, lastName){
        const response = await coachDao.createCoach(
            userId,
            schoolId,
            sportId,
            firstName,
            lastName
        );
        return new Coach(
            response.user_id,
            response.school_id,
            response.sport_id,
            response.first_name,
            response.last_name
        );
    }
}

module.exports = Coach; 