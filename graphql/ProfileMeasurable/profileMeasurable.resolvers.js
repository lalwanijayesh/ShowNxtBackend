const ProfileMeasurable = require("../../model/ProfileMeasurable");
const {
    createProfileMeasurable,
    getProfileMeasurableByProfile,
    getProfileMeasurableByProfileAndMeasurable
 } = require("../../dao/profile.measurable.dao");

const profileMeasurableResolvers = {
    Query: {
        profileMeasurableByProfile: (parent, args, context, info) => {
            return getProfileMeasurableByProfile((profileId = args.profileId));
        },
        profileMeasurableByProfileAndMeasurable: (parent, args, context, info) => {
            return getProfileMeasurableByProfileAndMeasurable((profileId = args.profileId),
                                                               (measurableId = args.measurableId));
        }
    },
    Mutation: {
        createProfileMeasurable: (parent, args, context, info) => {
            return ProfileMeasurable.createProfileMeasurable(
                args.profileId,
                args.measurableId,
                args.value
            );
        },
    },
};

module.exports = { profileMeasurableResolvers };
