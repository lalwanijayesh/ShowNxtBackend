class School {
    constructor(schoolID, schoolName, location) {
        this.schoolID = schoolID;
        this.schoolName = schoolName;
        this.location = location;
        this.divisions = new Map();
    }

    getSchoolID() {
        return this.schoolID;
    }

    getSchoolName() {
        return this.schoolName;
    }

    getLocation() {
        return this.location;
    }

    getDivisions() {
        return this.divisions;
    }

    addDivision(sport, divisionLevel) {
        this.divisions.set(sport, divisionLevel);
    }
}