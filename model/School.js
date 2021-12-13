class School {
  get schoolId() {
    return this._schoolId;
  }

  set schoolId(value) {
    this._schoolId = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get location() {
    return this._location;
  }

  set location(value) {
    this._location = value;
  }

  constructor(
    schoolId,
    name,
    location
  ) {
    this._schoolId = schoolId;
    this._name = name;
    this._location = location;
  }
}

module.exports = School;