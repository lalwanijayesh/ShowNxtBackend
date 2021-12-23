const ProfileVideo = require("../model/ProfileVideo");
const {db} = require("./database");

const makeProfileVideo = (row) => {
    return new ProfileVideo(row.video_id, row.profile_id, row.file_path, row.description, row.upload_date);
}

const addProfileVideo = async (profileId, filePath, description) => {
    const uploadDate = new Date().toLocaleString();
    const res = await db.query(
        `INSERT INTO profile_videos (profile_id, file_path, description, upload_date) 
                VALUES ($1, $2, $3, $4) 
                RETURNING video_id`,
                               [profileId, filePath, description, uploadDate]);
    return getVideoById(res.rows[0].video_id);
};

const createProfileVideos = async (profileId, filePaths, descriptions) => {
    let count = 0;
    for (let i = 0 ; i < filePaths.length; i++){
        await addProfileVideo(profileId, filePaths[i], descriptions[i]).then(count++);
    }
    if(count === filePaths.length){
        return getProfileVideos(profileId);
    }
}

const getProfileVideos = async (profileId) => {
    const res = await db.query(
        `SELECT video_id, profile_id, file_path, description, upload_date FROM profile_videos 
            WHERE profile_id = $1`, [profileId]);
    return res.rows.map(row => makeProfileVideo(row));
};

const getVideoById = async (videoId) => {
    const res = await db.query(
        `SELECT video_id, profile_id, file_path, description, upload_date FROM profile_videos 
            WHERE video_id = $1`, [videoId]);
    // TODO - create exception handler in case of no rows
    return makeProfileVideo(res.rows[0]);
};

module.exports = {
    addProfileVideo,
    getProfileVideos,
    getVideoById,
    createProfileVideos
};