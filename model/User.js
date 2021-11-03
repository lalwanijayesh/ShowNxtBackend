const { pool } = require("./database");

class User {
  constructor(userID = null, email = null) {
    if (userID) {
      let res = await pool.query("SELECT * FROM users WHERE id = $1", [userID]);
    } else if (email) {
      let res = await pool.query("SELECT * FROM users WHERE email = $1", [
        email,
      ]);
    } else {
      // maybe throw an error or something idk, above my pay grade
    }

    this.userID = userID;
    this.username = username;
    this.picture = "";
    this.email = email;
    this.comFlow = new Map();
  }

  addCom(key, message) {
    this.comFlow.set(key, message);
  }

  deleteCom(key) {
    this.comFlow.delete(key);
  }

  getCom() {
    return this.comFlow;
  }

  getEmail() {
    return this.email;
  }

  getPic() {
    return this.picture;
  }

  changeProfilePicture(picture) {
    this.picture = picture;
  }
}

const createUser = (email) => {
  // create the user in the database
  await pool.query("INSERT INTO users (email) VALUES ($1)", [email]);

  // Return a User object
  return new User((email = email));
};
