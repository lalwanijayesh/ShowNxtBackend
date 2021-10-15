const {getUserById, getUserByEmail, getUsers, createUser} = require('../../api/user.api');
const {User} = require('./user.types');

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
    Mutation: {
        createUser: (parent, args, context, info) => {
            return createUser(email = args.email, type = args.type)
        }
    }
}

module.exports = {userResolvers};