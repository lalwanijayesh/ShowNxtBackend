const {
  getAthletes,
  getAthleteById,
  createAthlete,
} = require("../../database/athlete.api");

const athleteResolvers = {
  Query: {
    athletes: () => {
      return getAthletes().then();
    },

    athlete: (parent, args, context, info) => {
      return getAthleteById((id = args.id)).then();
    },
  },
  Mutation: {
    createAthlete: (parent, args, context, info) => {
      return createAthlete(
        (id = args.id),
        (firstName = args.firstName),
        (lastName = args.lastName),
        (gender = args.gender),
        (gpa = args.gpa),
        (sat = args.sat),
        (act = args.act),
        (height = args.height),
        (weight = args.weight)
      ).then();
    },
  },
};

module.exports = { athleteResolvers };
