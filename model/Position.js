class Position {
    constructor(positionID, sportID, posName) {
        this.positionID = positionID;
        this.sportID = sportID;
        this.posName = posName;
    }

    getPositionID() {
        return this.positionID;
    }

    getSportID() {
        return this.sportID;
    }

    getPosName() {
        return this.posName;
    }
}