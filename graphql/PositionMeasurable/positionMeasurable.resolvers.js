const {
    getPositionMeasurable,
    getPositionMeasurablesByPositionId,
    getPositionMeasurablesByMeasurableId,
    getPositionMeasurables
} = require("../../dao/position.measurable.dao");

const positionMeasurableResolvers = {
    Query: {
        positionMeasurables: () => {
            return getPositionMeasurables();
        },
        positionMeasurablesByPosition: (parent, args, context, info) => {
            return getPositionMeasurablesByPositionId(positionId = args.positionId);
        },
        positionMeasurablesByMeasurable: (parent, args, context, info) => {
            return getPositionMeasurablesByMeasurableId(measurableId = args.measurableId);
        },
        positionMeasurable: (parent, args, context, info) => {
            return getPositionMeasurable(positionId = args.positionId, measurableId = args.measurableId );
        }

    },
};

module.exports = { positionMeasurableResolvers };
