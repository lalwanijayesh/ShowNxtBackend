class Evaluation{
    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }
    get coachId() {
        return this._coachId;
    }

    set coachId(value) {
        this._coachId = value;
    }
    get applicationId() {
        return this._applicationId;
    }

    set applicationId(value) {
        this._applicationId = value;
    }
    constructor(application,
                coachId,
                status) {
        this._applicationId = application;
        this._coachId = coachId;
        this._status = status;
    }
}

module.exports = Evaluation;