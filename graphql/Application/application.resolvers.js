const {
    createApplication,
    getApplications,
    getApplicationById,
    getApplicationsByCoach,
    getApplicationByProfile
} = require("../../dao/application.dao");

const applicationResolvers = {
    Query: {
        applications: () => {
            return getApplications();
        },
        application: (parent, args, context, info) => {
            return getApplicationById((userId = args.appId));
        },
        /*
        applicationsByCoach: (parent, args, context, info) => {
            return getApplicationsByCoach(coach = args.coach,
                                          wantedPositions = args.positions);
        },
        acceptedApplicationsByCoach: (parent, args, context, info) => {
            return getApplicationsByCoach(coach = args.coach,
                                          wantedPositions = args.positions,
                                          'ACCEPT');
        },
        rejectedApplicationsByCoach: (parent, args, context, info) => {
            return getApplicationsByCoach(coach = args.coach,
                                          wantedPositions = args.positions,
                                          'REJECT');
        },
        unevaluatedApplicationsByCoach: (parent, args, context, info) => {
            return getApplicationsByCoach(coach = args.coach,
                                          wantedPositions = args.positions,
                                          'UNEVALUATED');
        },
        applicationsByProfile: (parent, args, context, info) => {
            return getApplicationByProfile(args.profile);
        }

         */
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
};

module.exports = {applicationResolvers};
