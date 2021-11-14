const School = require("../../model/School");
const {gets, getSchoolById} = require("../../dao/school.dao");

const schoolResolvers = {
    Query: {
        schools: () => {
            return getSchools();
        },
        school: (parent, args, context, info) => {
            return getSchoolById((userId = args.userId));
        },
    },
};

module.exports = {schoolResolvers};
