class Sport {
    constructor(sportID, positions, name) {
        this.sportID = sportID;
        this.positions = positions;
        this.name = name;
    }

    getSportID() {
        return this.sportID;
    }

    getPositions() {
        return this.positions;
    }

    getName() {
        return this.name;
    }
}