class CoachOpening {
    get openingCount() {
        return this._openingCount;
    }

    set openingCount(value) {
        this._openingCount = value;
    }
    get positionId() {
        return this._positionId;
    }

    set positionId(value) {
        this._positionId = value;
    }
    get coachId() {
        return this._coachId;
    }

    set coachId(value) {
        this._coachId = value;
    }
    constructor(
        coach_id,
        position_id,
        opening_count
    ){
        this._coachId = coach_id;
        this._positionId = position_id;
        this._openingCount = opening_count;
    }
}
module.exports = CoachOpening;
