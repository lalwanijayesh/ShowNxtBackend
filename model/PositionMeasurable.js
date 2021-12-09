class PositionMeasurable {
    get measurableId() {
        return this._measurableId;
    }

    set measurableId(value) {
        this._measurableId = value;
    }
    get positionId() {
        return this._positionId;
    }

    set positionId(value) {
        this._positionId = value;
    }
    constructor(position_id, measurable_id) {
        this._positionId = position_id;
        this._measurableId = measurable_id;
    }
}

module.exports = PositionMeasurable;