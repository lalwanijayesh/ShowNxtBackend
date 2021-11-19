const Athlete = require("../../model/Athlete");
const { getAthletes, getAthleteById } = require("../../dao/athlete.dao");

const athleteResolvers = {
  Query: {
    athletes: () => {
      return getAthletes();
    },
    athlete: (parent, args, context, info) => {
      return getAthleteById((userId = args.userId));
    },
  },
  Mutation: {
    createAthlete: (parent, args, context, info) => {
      return Athlete.createAthlete(
        args.userId,
        args.firstName,
        args.lastName,
        args.gender,
        args.gpa,
        args.sat,
        args.act,
        args.height,
        args.weight
      );
    },
  },
};

module.exports = { athleteResolvers };
