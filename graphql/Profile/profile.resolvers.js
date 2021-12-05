const { getProfiles, getProfileById, getProfilesByAthlete, createProfile } = require("../../dao/profile.dao");
const { createProfileMeasurable } = require("../../dao/profile.measurable.dao");
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
            console.log("profile created", profile);
            var measurables = {};
            args.measurable_id.map(function (m, i) {
                measurables[m] = args.value[i];
            })
            console.log("measurables populated", measurables);
            profile.measurables = await args.measurable_id.map(
                async m => await createProfileMeasurable(profile.profileId, m, measurables[m]).then());
            console.log("measurables after gql", profile.measurables);
            console.log("final profile", profile);

            endTransaction().then();

            return profile;
            },
    },
};

module.exports = { profileResolvers };
