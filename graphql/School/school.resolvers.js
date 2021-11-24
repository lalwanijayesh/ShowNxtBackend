// const School = require("../../model/School");
const { getSchools, getSchoolById } = require("../../dao/school.dao");

const schoolResolvers = {
  Query: {
    schools: () => {
      return getSchools();
    },

    schoolsSearch: async (parent, args, context, info) => {
      let schools = await getSchools();

      return schools.filter(({ schoolId, name, location }) => {
        return name.includes(args.name);
      });
    },

    school: (parent, args, context, info) => {
      return getSchoolById((schoolId = args.schoolId));
    },
  },
};

module.exports = { schoolResolvers };
