class Coach extends User {

    constructor(userID, username, sport, title, school) {
        super(userID, username);
        this.sport = sport;
        this.title = title;
        this.school = school;
        this.openPositions = new Map();
        this.unevaluatedProfiles = [];
        this.acceptedProf = [];
        this.rejectedProf = [];
    }

    getSport() {
        return this.sport;
    }

    getTitle() {
        return this.title;
    }

    getSchool() {
        return this.school;
    }

    getOpenPositions() {
        return this.openPositions;
    }

    getProfiles() {
        return this.unevaluatedProfiles;
    }

    getAcceptedProf() {
        return this.acceptedProf;
    }

    getRejectedProf() {
        return this.rejectedProf();
    }

    evaluate(id, evaluation) {
        for (let i = 0; i < this.unevaluatedProfiles.length; i++) {
            if (this.unevaluatedProfiles[i].getUserID() === id) {
                let profile = this.unevaluatedProfiles[i];
                this.unevaluatedProfiles.remove();
                if (evaluation === true) {
                    this.acceptedProf.push(profile);
                } else {
                    this.rejectedProf.push(profile);
                }
            }
        }
        throw "Invalid ID";
    }

}