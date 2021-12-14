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

         */
        applicationsByProfile: (parent, args, context, info) => {
            return getApplicationByProfile(args.profileId);
        }
        /*
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
