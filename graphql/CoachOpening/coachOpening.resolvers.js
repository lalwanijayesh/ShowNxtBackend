const {
    createCoachOpening,
    getCoachOpenings,
    getCoachOpeningByCoach,
    getCoachOpeningById
} = require("../../dao/coach.opening.dao");

const coachOpeningResolvers = {
    Query: {
        coachOpenings: (parent, args, context, info ) => {
            return getCoachOpenings();
        },
        coachOpeningById: (parent, args, context, info) => {
            return getCoachOpeningById(args.openingId);
        },
        coachOpeningsByCoachId: (parent, args, context, info) => {
            return getCoachOpeningByCoach(args.coachId);
        }
    },
    Mutation: {
        createCoachOpening: (parent, args, context, info) => {
            return createCoachOpening(
                args.coachId,
                args.positionId,
                args.openingCount
            );
        },
    },
};

module.exports = { coachOpeningResolvers };
