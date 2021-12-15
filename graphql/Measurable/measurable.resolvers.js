const { getMeasurables, getMeasurableById } = require("../../dao/measurable.dao");

const measurableResolvers = {
    Query: {
        measurables: () => {
            return getMeasurables();
        },
        measurable: (parent, args, context, info) => {
            return getMeasurableById((measurableId = args.measurableId));
        },
    },
};

module.exports = { measurableResolvers };
