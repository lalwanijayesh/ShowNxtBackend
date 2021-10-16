const { gql } = require("apollo-server");

/**
 * Defines the sport type definition.
 */
const Sport = gql`
  # duplicate of the version in Athlete, dunno if we need to / how to make
  # a file for it on its own
  enum SportGender {
    MALE
    FEMALE
  }

  # Extends the top-level root Query object with specific queries
  extend type Query {
    sports: [Sport!]
    sport(id: ID!): Sport
  }

  extend type Mutation {
    createSport(name: String!, gender: SportGender!): Sport
  }

  type Sport {
    id: ID!
    name: String!
    gender: SportGender!
  }
`;

module.exports = { Sport };
