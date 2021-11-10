const athleteDao = require("../dao/athlete.dao");

class Athlete {
  constructor(
    userId,
    firstName,
    lastName,
    gender,
    gpa,
    sat,
    act,
    height,
    weight
  ) {
    this._userId = userId;
    this._firstName = firstName;
    this._lastName = lastName;
    this._gender = gender;
    this._gpa = gpa;
    this._sat = sat;
    this._act = act;
    this._height = height;
    this._weight = weight;
  }

  get userId() {
    return this._userId;
  }

  set userId(value) {
    this._userId = value;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    this._lastName = value;
  }

  get gender() {
    return this._gender;
  }

  set gender(value) {
    this._gender = value;
  }

  get gpa() {
    return this._gpa;
  }

  set gpa(value) {
    this._gpa = value;
  }

  get sat() {
    return this._sat;
  }

  set sat(value) {
    this._sat = value;
  }

  get act() {
    return this._act;
  }

  set act(value) {
    this._act = value;
  }

  get height() {
    return this._height;
  }

  set height(value) {
    this._height = value;
  }

  get weight() {
    return this._weight;
  }

  set weight(value) {
    this._weight = value;
  }

  static async createAthlete(userId, firstName, lastName, gender) {
    const response = await athleteDao
      .createAthlete(
        userId,
        firstName,
        lastName,
        gender,
        gpa,
        sat,
        act,
        height,
        weight
      )
      .then();
    // TODO create mapper to transform db responses to model object
    return new Athlete(
      response.userid,
      response.firstname,
      response.lastname,
      response.gender,
      response.gpa,
      response.sat,
      response.act,
      response.height,
      response.weight
    );
  }
}

module.exports = Athlete;
