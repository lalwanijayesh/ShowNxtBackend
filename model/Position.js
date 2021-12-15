class Position {
    get positionName() {
        return this._positionName;
    }

    set positionName(value) {
        this._positionName = value;
    }
    get sportId() {
        return this._sportId;
    }

    set sportId(value) {
        this._sportId = value;
    }
    get positionId() {
        return this._positionId;
    }

    set positionId(value) {
        this._positionId = value;
    }

    constructor(
        positionId,
        sportId,
        positionName
    ) {
        this._positionId = positionId;
        this._sportId = sportId;
        this._positionName = positionName;
    }
}

module.exports = Position;
