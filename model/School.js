class School {
  get offerings() {
    return this._offerings;
  }

  set offerings(value) {
    this._offerings = value;
  }
  get openings() {
    return this._openings;
  }

  set openings(value) {
    this._openings = value;
  }


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
    location,
    openings,
    offerings
  ) {
    this._schoolId = schoolId;
    this._name = name;
    this._location = location;
    this._openings = openings;
    this._offerings = offerings;
  }
}

module.exports = School;