const Profile = require("../../model/Profile");
const { getProfiles, getProfileById, getProfilesByAthlete, createProfile } = require("../../dao/profile.dao");

const profileResolvers = {
    Query: {
        profiles: () => {
            return getProfiles();
        },
        profilesAthlete: (parent, args, context, info) => {
            return getProfilesByAthlete((user_id = args.user_id)).then();
        },
        profile: (parent, args, context, info) => {
            return getProfileById((profile_id = args.profile_id)).then();
        }
    },
    Mutation: {

        createProfile: (parent, args, context, info) => {
            return createProfile(
                args.user_id,
                args.sport_id,
                args.position_id
            );
        },
    },
};

module.exports = { profileResolvers };
