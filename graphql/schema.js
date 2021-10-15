
const { merge } = require('lodash');

const { User } = require('./User/user.types');
const { userResolvers } = require('./User/user.resolvers');

// Note that we must have at least one field (empty in this case)
// In this set up, we extend the root Query type within individual classes, 
// which allows for more flexibility and compatibility. Read the docs for more info on this.
const Query = `
    type Query {
        _empty: String
    }
`;

const Mutation = `
    type Mutation {
        _empty: String
    }
`;

const resolvers = {} // any additional resolvers we might need that are not type-specific

const rootSchema = {
    typeDefs: [ Query, Mutation, User ],
    resolvers: merge(resolvers, userResolvers)
};

module.exports = { rootSchema };