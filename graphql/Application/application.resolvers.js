const Application = require("../../model/Application");
const {
    createApplication,
    getApplicationById,
    getApplicationsByCoach,
    getApplicationsByAthlete
} = require("../../dao/application.dao");

const applicationResolvers = {
    Query: {
        applications: () => {
            return getApplications();
        },
        application: (parent, args, context, info) => {
            return getApplicationById((userId = args.appId));
        },
        /**
         * Gets all the applications associated with a coach
         * @param parent
         * @param args coach = the coach to search for,
         *             positions = positions to retrieve, if left blank, retrieves applications for
         *     all positions
         * @param context
         * @param info
         * @returns {*}
         */
        applicationByCoach: (parent, args, context, info) => {
            return getApplicationsByCoach(coach = args.coach,
                                          wantedPositions = args.positions,
                                          10);
        },
        acceptedApplicationByCoach: (parent, args, context, info) => {
            return getApplicationsByCoach(coach = args.coach,
                                          wantedPositions = args.positions,
                                          10, 'ACCEPT');
        },
        rejectedApplicationByCoach: (parent, args, context, info) => {
            return getApplicationsByCoach(coach = args.coach,
                                          wantedPositions = args.positions,
                                          10, 'REJECT');
        },
        unevaluatedApplicationByCoach: (parent, args, context, info) => {
            return getApplicationsByCoach(coach = args.coach,
                                          wantedPositions = args.positions,
                                          10, 'UNEVALUATED');
        },
        applicationsByProfile: (parent, args, context, info) => {
            return getApplicationByProfile(args.profile, 10);
        },
        applicationsByAthlete: (parent, args, context, info) => {
            return getApplicationsByAthlete(args.athlete, 10);
        }
    },
    Mutation: {
        createApplication: (parent, args, context, info) => {
            return Application.createApplication(
                args.profile,
                args.school,
                args.sport,
                args.position,
            );
        },
    },
};

module.exports = {applicationResolvers};
