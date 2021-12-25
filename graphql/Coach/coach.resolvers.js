const { getCoaches, getCoachById, createCoach, getCoachWithOpenings} = require("../../dao/coach.dao");
const { startTransaction, endTransaction } = require("../../dao/transaction.dao");
const { createCoachOpenings, getCoachOpeningByCoach} = require("../../dao/coach.opening.dao");
const {getEvaluationsByCoach, storeEvaluation} = require("../../dao/evaluation.dao");
const {getNextApplicationByCoach} = require("../../dao/application.dao");

const coachResolvers = {
  Query: {
    coach: (parent, args, context, info) => {
      return getCoachById((userId = args.userId));
    },
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

      coach.openPositions = await createCoachOpenings(coach.userId, args.openPositionIds, args.openPositionValues);
      endTransaction().then();
      return coach;
    },
      acceptApplication: async (parent, args, context, info) => {
        return storeEvaluation(args.applicationId, args.userId, "ACCEPT");
      },
      rejectApplication: async (parent, args, context, info) => {
        return storeEvaluation(args.applicationId, args.userId, "REJECT");
      }
  },

  Coach: {
      async openPositions(parent) {
          return getCoachOpeningByCoach(parent.userId);
      },
      async acceptedEvaluations(parent) {
          return getEvaluationsByCoach(parent.userId, 'ACCEPT');
      },
      async dismissedEvaluations(parent) {
          return getEvaluationsByCoach(parent.userId, 'DISMISS');

      },
      async nextApplication(parent) {
          return getNextApplicationByCoach(parent.userId);
      }
  }
};

module.exports = { coachResolvers };
