const Athlete = require("../../model/Athlete");
const { getAthletes, getAthleteById } = require('../../dao/athlete.dao');

const athleteResolvers = {
    Query: {
        athletes: () => {
            return getAthletes();
        },
        athlete: (parent, args, context, info) => {
            return getAthleteById(userId = args.userId);
        }
    },
    Mutation: {
        createAthlete: (parent, args, context, info) => {
            // return createAthlete(args.userId, args.firstName, args.lastName, args.gender)
            return Athlete.createAthlete(args.userId, args.firstName, args.lastName, args.gender)
        }
    }
}

module.exports = {athleteResolvers};