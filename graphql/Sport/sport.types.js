const { gql } = require("apollo-server");

/**
 * Defines the sport type definition.
 */
const Sport = gql`
  enum Gender {
    MALE
    FEMALE
    NONBINARY
    OTHER
  }

  # Extends the top-level root Query object with specific queries
  extend type Query {
    sports: [Sport!]
    sport(sportId: ID!): Sport
  }

  type Sport {
    sportId: ID
    sportName: String
    gender: Gender
  }
`;

module.exports = { Sport };
