const { gql } = require('apollo-server');

/**
 * Defines the user type definition.
 */
const User = gql`
    enum UserType {
        ATHLETE
        COACH
    }

    # Extends the top-level root Query object with specific queries
    extend type Query {
        users: [User!]
        user(id: ID!): User
        userByEmail(email: String!): User
    }

    extend type Mutation {
        createUser(email: String!, type: UserType!): User
    }

    type User {
        id: ID!
        email: String!
        type: UserType!
    }
`

module.exports = { User };