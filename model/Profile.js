class Profile {
    constructor(userID, sport, position) {
        this.userID = userID;
        this.sport = sport;
        this.position = position;
        this.videos = [];
    }

    getUserID() {
        return this.userID;
    }

    getSport() {
        return this.sport;
    }

    getPosition() {
        return this.position;
    }

    getVideos() {
        return this.videos;
    }
}