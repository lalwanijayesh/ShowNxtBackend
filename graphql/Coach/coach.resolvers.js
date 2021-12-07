const { getCoaches, getCoachById, createCoach, getCoachWithOpenings} = require("../../dao/coach.dao");
const { startTransaction, endTransaction } = require("../../dao/transaction.dao");
const { createCoachOpenings } = require("../../dao/coach.opening.dao");

const coachResolvers = {
  Query: {
    coaches: () => {
      return getCoaches();
    },
    coach: (parent, args, context, info) => {
      return getCoachById((userId = args.userId));
    },
    coachWithOpenPositions: (parent, args, context, info) => {
      return getCoachWithOpenings((userId = args.userId));
    }
  },
  Mutation: {
    createCoach: async (parent, args, context, info) => {
      startTransaction().then();
      var coach = await createCoach(
        args.userId,
        args.schoolId,
        args.sportId,
        args.firstName,
        args.lastName,
      );

      console.log(coach);
      coach.openPositions = await createCoachOpenings(coach.userId, args.openPositionIds, args.openPositionValues);
      endTransaction().then();
      return coach;
    },
  },
};

module.exports = { coachResolvers };
