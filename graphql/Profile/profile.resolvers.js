const { getProfiles, getProfileById, getProfilesByAthlete, createProfile,
    getProfileWithMeasurable
} = require("../../dao/profile.dao");
const { createProfileMeasurables} = require("../../dao/profile.measurable.dao");
const { startTransaction, endTransaction } = require("../../dao/transaction.dao");



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
        },
        profileWithMeasurables: (parent, args, context, info) => {
            return getProfileWithMeasurable(profile_id = args.profile_id).then();
        }

    },
    Mutation: {
        createProfile: async (parent, args, context, info) => {
            startTransaction().then();
            console.log(args);
            const profile = await createProfile(
                args.user_id,
                args.position_id
            ).then();
            profile.measurables = await createProfileMeasurables(profile.profileId, args.measurable_id, args.value);
            endTransaction().then();

            return profile;
            },
    },
};

module.exports = { profileResolvers };
