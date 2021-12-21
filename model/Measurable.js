class Measurable{
    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
    }
    get format() {
        return this._format;
    }

    set format(value) {
        this._format = value;
    }
    get measurableName() {
        return this._measurableName;
    }

    set measurableName(value) {
        this._measurableName = value;
    }
    get measurableId() {
        return this._measurableId;
    }

    set measurableId(value) {
        this._measurableId = value;
    }
    constructor(measurableId, measurableName, format, value) {
        this._measurableId = measurableId;
        this._measurableName = measurableName;
        this._format = format;
        this._value = value;
    }

}
module.exports = Measurable;