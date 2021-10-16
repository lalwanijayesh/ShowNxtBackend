const { gql } = require("apollo-server");

/**
 * Defines the coach type definition.
 */
const Coach = gql`
  # Extends the top-level root Query object with specific queries
  extend type Query {
    coaches: [Coach!]
    coach(id: ID!): Coach
  }

  extend type Mutation {
    createCoach(
      school: School!
      sport: Sport!
      firstName: String!
      lastName: String!
    ): Coach
  }

  type Coach {
    id: ID!
    school: School!
    sport: Sport!
    firstName: String!
    lastName: String!
  }
`;

module.exports = { Coach };
