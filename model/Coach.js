const coachDao = require("../dao/coach.dao");

class Coach {
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
        this._openPositions = this.addPositions(openPositions);
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

    get openPositions(wantedPositions) {
        if(wantedPositions){
            var ret = [];
            for(var p in wantedPositions){
                if (p in this._openPositions){
                    ret.push(p);
                }
            }
            return ret;
        } else{
            return Objects.keys(this._openPositions);
        }
    }

    function addPositions(positions){
        for(var pos in positions){
            this.updatePosition(pos, positions[pos]);
        }
    }

    function updatePosition(positionId, number) {
       this._openPositions[positionId] = number
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