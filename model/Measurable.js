class Measurable {
    constructor(measurableID, value, format) {
        this.measurableID = measurableID;
        this.value = value;
        this.format = format;
    }

    getID() {
        return this.measurableID;
    }

    getValue() {
        return this.value;
    }

    getFormat() {
        return this.format;
    }
}