const { getUserById, getUserByEmail, getUsers } = require('../../api/user.api');
const { User } = require('./user.types');

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