const {
    createCoachOpening,
    getCoachOpenings,
    getCoachOpeningByCoach,
    getCoachOpeningById
} = require("../../dao/coach.opening.dao");
const {getPositionById} = require("../../dao/position.dao");

const coachOpeningResolvers = {
    Query: {
        coachOpenings: (parent, args, context, info ) => {
            return getCoachOpenings();
        },
        coachOpeningById: (parent, args, context, info) => {
            return getCoachOpeningById(args.openingId);
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
    CoachOpening: {
        async position(parent) {
            return getPositionById(parent.positionId);
        }
    }
};

module.exports = { coachOpeningResolvers };
