const {
  getCoaches,
  getCoachById,
  createCoach,
} = require("../../database/coach.api");

const coachResolvers = {
  Query: {
    coaches: () => {
      return getCoaches().then();
    },

    coach: (parent, args, context, info) => {
      return getCoachById((id = args.id)).then();
    },
  },
  Mutation: {
    createCoach: (parent, args, context, info) => {
      return createCoach(
        (id = args.id),
        (school = args.school),
        (sport = args.sport),
        (firstName = args.firstName),
        (lastName = args.lastName)
      ).then();
    },
  },
};

module.exports = { coachResolvers };
