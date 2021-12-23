const { getProfiles, getProfileById, getProfilesByAthlete, createProfile,
    getProfileWithMeasurable
} = require("../../dao/profile.dao");
const { createProfileMeasurables,
    getProfileMeasurablesByProfile
} = require("../../dao/profile.measurable.dao");
const { startTransaction, endTransaction } = require("../../dao/transaction.dao");
const { createProfileVideos, getProfileVideos} = require("../../dao/profile.video.dao");
const {getAthleteById} = require("../../dao/athlete.dao");


const profileResolvers = {
    Query: {
        athleteProfiles: (parent, args, context, info) => {
            return getProfilesByAthlete((user_id = args.user_id)).then();
        },
        profile: (parent, args, context, info) => {
            return getProfileById((profile_id = args.profile_id)).then();
        },
    },
    Mutation: {
        createProfile: async (parent, args, context, info) => {
            startTransaction().then();
            const profile = await createProfile (
                args.user_id,
                args.position_id
            ).then();
            if (args.measurables)
                profile.measurables = await createProfileMeasurables(profile.profileId, args.measurable_ids, args.values);
            if (args.videos)
                profile.videos = await createProfileVideos(profile.profileId, args.filepaths, args.descriptions);
            endTransaction().then();

            return profile;
            },
    },
    Profile: {
        athlete(parent){
            return getAthleteById(parent.userId);
        },
        measurables(parent){
            return getProfileMeasurablesByProfile(parent.profileId);
        },
        videos(parent) {
            return getProfileVideos(parent.profileId);
        }
    }
};

module.exports = { profileResolvers };
