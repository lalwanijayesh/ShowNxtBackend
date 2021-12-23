class SportOffering{
    get sportId() {
        return this._sportId;
    }

    set sportId(value) {
        this._sportId = value;
    }
    get schoolId() {
        return this._schoolId;
    }

    set schoolId(value) {
        this._schoolId = value;
    }
    get offeringId() {
        return this._offeringId;
    }

    set offeringId(value) {
        this._offeringId = value;
    }
    constructor(offering_id,
                school_id,
                sport_id) {
        this._offeringId = offering_id;
        this._schoolId = school_id;
        this._sportId = sport_id;
    }
}
module.exports = SportOffering;