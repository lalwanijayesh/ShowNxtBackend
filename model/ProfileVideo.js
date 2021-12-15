class ProfileVideo {
    constructor(videoId, profileId, filePath, description, uploadDate) {
        this._videoId = videoId;
        this._profileId = profileId;
        this._filePath = filePath;
        this._description = description;
        this._uploadDate = uploadDate;
    }

    get videoId() {
        return this._videoId;
    }

    set videoId(value) {
        this._videoId = value;
    }

    get profileId() {
        return this._profileId;
    }

    set profileId(value) {
        this._profileId = value;
    }

    get filePath() {
        return this._filePath;
    }

    set filePath(value) {
        this._filePath = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }

    get uploadDate() {
        return this._uploadDate;
    }

    set uploadDate(value) {
        this._uploadDate = value;
    }
}

module.exports = ProfileVideo;