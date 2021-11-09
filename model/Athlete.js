const athleteDao = require("../dao/athlete.dao");

class Athlete {
    constructor(userId, firstName, lastName, gender) {
        this._userId = userId;
        this._firstName = firstName;
        this._lastName = lastName;
        this._gender = gender;
    }

    get userId() {
        return this._userId;
    }

    set userId(value) {
        this._userId = value;
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

    get gender() {
        return this._gender;
    }

    set gender(value) {
        this._gender = value;
    }

    static async createAthlete(userId, firstName, lastName, gender) {
        const response = await athleteDao.createAthlete(userId, firstName, lastName, gender).then();
        // TODO create mapper to transform db responses to model object
        return new Athlete(response.userid, response.firstname, response.lastname, response.gender);
    }
}

module.exports = Athlete