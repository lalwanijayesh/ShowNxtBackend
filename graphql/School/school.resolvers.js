// const School = require("../../model/School");
const { getSchools, getSchoolById } = require("../../dao/school.dao");

const schoolResolvers = {
  Query: {
    schools: () => {
      return getSchools();
    },

    school: (parent, args, context, info) => {
      return getSchoolById((schoolId = args.schoolId));
    },
  },
};

module.exports = { schoolResolvers };
