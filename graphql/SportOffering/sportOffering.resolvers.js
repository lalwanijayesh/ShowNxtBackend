const {
    getSportOfferingsBySchool,
    getSportOfferings,
    getSportOfferingById } = require("../../dao/sport.offering.dao");
const {getSportById} = require("../../dao/sport.dao");

const sportOfferingResolvers = {
    Query: {
        sportOfferings: () => {
            return getSportOfferings();
        },
        sportOffering: (parent, args, context, info) => {
            return getSportOfferingById((sportId = args.sportOfferingId));
        },
    },
    SportOffering: {
        async sport(parent) {
            return getSportById(parent.sportId);
        }
    }
};

module.exports = { sportOfferingResolvers };
