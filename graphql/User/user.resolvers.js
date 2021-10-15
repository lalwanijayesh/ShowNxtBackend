const { getUserById, getUserByEmail, getUsers } = require('../../database/user.api');

/**
 * Contains all the main query and mutation resolvers that operate with User. 
 * 
 * Note that one shouldn't actually interact with the database here. Instead, make use of the api functions.
 */
const userResolvers = {
    Query: {
        users: () => {
            return getUsers().then();
        },

        user: (parent, args, context, info) => {
            return getUserById(args.id).then();
        },

        userByEmail: (parent, args, context, info) => {
            return getUserByEmail(args.email).then();
        }
    },
}

module.exports = { userResolvers };