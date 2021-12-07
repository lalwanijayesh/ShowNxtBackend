const { gql } = require("apollo-server");

/**
 * Defines the coach type definition.
 */
const Coach = gql`
  # Extends the top-level root Query object with specific queries
  extend type Query {
    coaches: [Coach!]
    coach(userId: ID!): Coach
    coachWithOpenPositions(userId: ID!): Coach
  }

  extend type Mutation {
    createCoach(
      userId: ID!
      schoolId: ID!
      sportId: ID!
      firstName: String!
      lastName: String!
      openPositions: [ID!] 
    ): Coach
  }

  type Coach {
    userId: ID
    schoolId: ID
    sportId: ID
    firstName: String
    lastName: String
    openPositions: [ID!] 
  }
`;

module.exports = { Coach };
