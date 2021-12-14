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
    get application() {
        return this._application;
    }

    set application(value) {
        this._application = value;
    }
    constructor(application,
                coachId,
                status) {
        this._application = application;
        this._coachId = coachId;
        this._status = status;
    }
}

module.exports = Evaluation;