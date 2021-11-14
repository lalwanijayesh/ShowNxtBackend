const {gql} = require("apollo-server");

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
    sport(userId: ID!): Sport
  }

  type Sport {
    sportId: ID
    name: String
    gender: Gender
  }
`;

module.exports = { Sport };
