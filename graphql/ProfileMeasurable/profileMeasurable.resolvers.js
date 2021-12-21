const {
    createProfileMeasurable,
    getProfileMeasurablesByProfile,
    getProfileMeasurableByProfileAndMeasurable
 } = require("../../dao/profile.measurable.dao");

const profileMeasurableResolvers = {
    Query: {
        profileMeasurablesByProfile: (parent, args, context, info) => {
            return getProfileMeasurablesByProfile((profileId = args.profileId));
        },
        profileMeasurableByProfileAndMeasurable: (parent, args, context, info) => {
            return getProfileMeasurableByProfileAndMeasurable((profileId = args.profileId),
                                                               (measurableId = args.measurableId));
        }
    },
    Mutation: {
        createProfileMeasurable: (parent, args, context, info) => {
            return createProfileMeasurable(
                args.profileId,
                args.measurableId,
                args.value
            );
        },
    },
};

module.exports = { profileMeasurableResolvers };
