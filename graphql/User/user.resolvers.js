const { getUserById, getUserByEmail, getUsers, createUser } = require('../../dao/user.dao');

const userResolvers = {
    Query: {
        users: () => {
            return getUsers().then();
        },
        user: (parent, args, context, info) => {
            return getUserById(id = args.id).then();
        },

        userByEmail: (parent, args, context, info) => {
            return getUserByEmail(email = args.email).then();
        }
    },
    Mutation: {
        createUser: (parent, args, context, info) => {
            return createUser(email = args.email, type = args.type)
        }
    }
}

module.exports = {userResolvers};