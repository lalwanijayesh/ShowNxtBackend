const { getSchools, getSchoolById } = require("../../dao/school.dao");
const {getCoachOpeningBySchool} = require("../../dao/coach.opening.dao");
const {getSportsBySchool} = require("../../dao/sport.dao");
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
  School: {
    async openings(parent) {
      return await getCoachOpeningBySchool(parent.schoolId).then();
    },
    async offerings(parent) {
      return await getSportsBySchool(parent.schoolId).then();
    }
  }
};

module.exports = { schoolResolvers };
