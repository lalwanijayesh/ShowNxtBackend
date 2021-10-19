const { getSchools, getSchoolById, createSchool } = require('../../database/school.api');

const schoolResolvers = {
    Query: {
        schools: () => {
            return getSchools().then();
        },
        school: (parent, args, context, info) => {
            return getSchoolById(args.id).then();
        },
    },
    Mutation: {
        createSchool: (parent, args, context, info) => {
            return createUser(args.id, args.name, args.location, args.division);
        }
    }
}

module.exports = {schoolResolvers};