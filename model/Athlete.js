class Athlete extends User {
  constructor(
    userID,
    username,
    gender,
    GPA,
    SAT,
    ACT,
    height,
    weight,
    highSchool,
    location
  ) {
    super(userID, username);
    this.#gender = gender;
    this.#GPA = GPA;
    this.#SAT = SAT;
    this.#ACT = ACT;
    this.#height = height;
    this.#weight = weight;
    this.#highSchool = highSchool;
    this.#location = location;
    this.#profiles = new Map();
  }

  getGender() {
    return this.#gender;
  }

  getGPA() {
    return this.#GPA;
  }

  getSAT() {
    return this.#SAT;
  }

  getACT() {
    return this.#ACT;
  }

  getHeight() {
    return this.#height;
  }

  getWeight() {
    return this.#weight;
  }

  getHighSchool() {
    return this.#highSchool;
  }

  getLocation() {
    return this.#location;
  }

  getProfiles() {
    return this.#profiles;
  }

  addProfile(sport, profile) {
    this.#profiles.set(sport, profile);
  }

  deleteProfile(sport) {
    this.#profiles.delete(sport);
  }
}
