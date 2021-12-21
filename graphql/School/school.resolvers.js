const { getSchools, getSchoolById } = require("../../dao/school.dao");

const schoolResolvers = {
  Query: {
    schools: () => {
      return getSchools();
    },

    schoolSearch: async (parent, args, context, info) => {
      let schools = await getSchools();

      return schools.filter((school) =>
        school.name.toLowerCase().includes(args.term.toLowerCase())
      );
    },

    school: (parent, args, context, info) => {
      return getSchoolById((schoolId = args.schoolId));
    },
  },
};

module.exports = { schoolResolvers };
