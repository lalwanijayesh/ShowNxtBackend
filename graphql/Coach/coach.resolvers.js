const Coach = require("../../model/Coach");
const { getCoachs, getCoachById } = require("../../dao/coach.dao");

const coachResolvers = {
  Query: {
    coaches: () => {
      return getCoaches();
    },
    coach: (parent, args, context, info) => {
      return getCoachById((userId = args.userId));
    },
  },
  Mutation: {
    createCoach: (parent, args, context, info) => {
      return Coach.createCoach(
        args.userId,
        args.schoolId,
        args.sportId,
        args.firstName,
        args.lastName
      );
    },
  },
};

module.exports = { coachResolvers };
