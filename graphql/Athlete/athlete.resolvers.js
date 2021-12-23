const { getAthleteById, createAthlete } = require("../../dao/athlete.dao");

const athleteResolvers = {
  Query: {
    athlete: (parent, args, context, info) => {
      return getAthleteById((user_id = args.user_id)).then();
    },
  },
  Mutation: {
    createAthlete: (parent, args, context, info) => {
      return createAthlete(
          args.user_id,
          args.first_name,
          args.last_name,
          args.gender,
          args.gpa,
          args.sat,
          args.act,
          args.height,
          args.weight
      )
    },
  },
};

module.exports = { athleteResolvers };
