const { getPositions, getPositionById, getPositionBySport } = require("../../dao/position.dao");

const positionResolvers = {
    Query: {
        positions: () => {
            return getPositions();
        },
        position: (parent, args, context, info) => {
            return getPositionById((positionId = args.positionId));
        },
        positionsBySport: (parent, args, context, info) => {
            return getPositionBySport((sportId = args.sportId))
        }
    },
};

module.exports = { positionResolvers };
