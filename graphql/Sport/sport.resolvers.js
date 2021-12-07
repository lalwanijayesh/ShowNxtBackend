const { getSports, getSportById } = require("../../dao/sport.dao");

const sportResolvers = {
  Query: {
    sports: () => {
      return getSports();
    },
    sport: (parent, args, context, info) => {
      return getSportById((sportId = args.sportId));
    },
  },
};

module.exports = { sportResolvers };
