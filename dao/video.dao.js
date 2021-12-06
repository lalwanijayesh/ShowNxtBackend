const ProfileVideo = require("../model/ProfileVideo");
const {db} = require("./database");

const addProfileVideo = async (profileId, filePath, description) => {
    const uploadDate = new Date().toLocaleString();
    const res = await db.query("INSERT INTO profile_videos " +
        "(profile_id, file_path, description, upload_date) " +
        "VALUES ($1, $2, $3, $4) RETURNING video_id",
        [profileId, filePath, description, uploadDate]);
    return getVideoById(res.rows[0].video_id);
};

const getProfileVideos = async (profileId) => {
    const res = await db.query("SELECT * FROM profile_videos WHERE profile_id = $1", [profileId]);
    return res.rows.map(row =>
        new ProfileVideo(row.video_id, row.profile_id, row.file_path, row.description, row.upload_date));
};

const getVideoById = async (videoId) => {
    const res = await db.query("SELECT * FROM profile_videos WHERE video_id = $1", [videoId]);
    // TODO - create exception handler in case of no rows
    return new ProfileVideo(
        res.rows[0].video_id,
        res.rows[0].profile_id,
        res.rows[0].file_path,
        res.rows[0].description,
        res.rows[0].upload_date
    );
};

module.exports = {
    addProfileVideo,
    getProfileVideos,
    getVideoById
};