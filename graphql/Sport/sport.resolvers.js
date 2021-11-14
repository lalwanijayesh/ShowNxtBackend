const Sport = require("../../model/Sport");
const {getSports, getSportById} = require("../../dao/sport.dao");

const sportResolvers = {
    Query: {
        sports: () => {
            return getSports();
        },
        sport: (parent, args, context, info) => {
            return getSportById((userId = args.userId));
        },
    },
};

module.exports = {sportResolvers};
