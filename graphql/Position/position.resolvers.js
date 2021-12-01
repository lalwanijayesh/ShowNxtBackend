// const Sport = require("../../model/Sport");
const { getPositions } = require("../../dao/position.dao");

const positionResolvers = {
  Query: {
    positions: (parent, args, context, info) => {
      return getPositions((sportId = args.sportId));
    },
  },
};

module.exports = { positionResolvers };
