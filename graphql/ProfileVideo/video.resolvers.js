const {addProfileVideo, getProfileVideos, getVideoById} = require("../../dao/video.dao");

const videoResolvers = {
    Query: {
        video: (parent, args, context, info) => {
            return getVideoById(args.videoId);
        },
        videos: (parent, args, context, info) => {
            return getProfileVideos(args.profileId);
        }
    },
    Mutation: {
        addProfileVideo: (parent, args, context, info) => {
            return addProfileVideo(args.profileId, args.filePath, args.description);
        }
    }
};

module.exports = {videoResolvers}