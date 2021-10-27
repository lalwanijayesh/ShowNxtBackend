class User {
    constructor(userID, username, email) {
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









