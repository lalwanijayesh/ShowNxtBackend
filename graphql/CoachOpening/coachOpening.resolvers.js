const {
    createCoachOpening,
} = require("../../dao/coach.opening.dao");
const {getPositionById} = require("../../dao/position.dao");

const coachOpeningResolvers = {
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
