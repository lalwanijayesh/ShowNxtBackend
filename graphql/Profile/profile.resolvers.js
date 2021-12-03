const Profile = require("../../model/Profile");
const { getProfiles, getProfileById, getProfilesByAthlete } = require("../../dao/profile.dao");

const profileResolvers = {
    Query: {
        profiles: () => {
            return getProfiles();
        },
        profilesAthlete: (parent, args, context, info) => {
            return getProfilesByAthlete((userId = args.userId));
        },
        profile: (parent, args, context, info) => {
            return getProfileById((profileId = args.profileId));
        }
    },
    Mutation: {
        createProfile: (parent, args, context, info) => {
            return Profile.createProfile(
                args.userId,
                args.sportId,
                args.positionId
            );
        },
    },
};

module.exports = { profileResolvers };
