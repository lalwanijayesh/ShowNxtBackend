const {
    createApplication,
    getApplications,
    getApplicationById,
    getNextApplicationByCoach,
    getApplicationByProfile
} = require("../../dao/application.dao");
const {getProfileById} = require("../../dao/profile.dao");

const applicationResolvers = {

    Query: {
        applications: () => {
            return getApplications();
        },
        application: (parent, args, context, info) => {
            return getApplicationById((userId = args.appId));
        },

        applicationsByProfile: (parent, args, context, info) => {
            return getApplicationByProfile(args.profileId);
        },
        nextApplicationByCoach: (parent, args, context, info) => {
            return getNextApplicationByCoach(args.coachId);
        }
    },
    Mutation: {
        createApplication: (parent, args, context, info) => {
            return createApplication(
                args.profileId,
                args.schoolId,
                args.positionId
            );
        },
    },
    Application: {
        async profile(parent){
            return getProfileById(parent.profileId);
        }
    }
};

module.exports = {applicationResolvers};
