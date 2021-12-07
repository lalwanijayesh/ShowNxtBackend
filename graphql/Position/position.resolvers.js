const { getPositions, getPositionById } = require("../../dao/position.dao");

const positionResolvers = {
    Query: {
        positions: () => {
            return getPositions();
        },
        position: (parent, args, context, info) => {
            return getPositionById((positionId = args.positionId));
        },
    },
};

module.exports = { positionResolvers };
