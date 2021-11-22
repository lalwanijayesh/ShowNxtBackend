const { gql } = require("apollo-server");

/**
 * Defines the coach type definition.
 */
const Coach = gql`

  # Extends the top-level root Query object with specific queries
  extend type Query {
    coaches: [Coach!]
    coach(userId: ID!): Coach
  }

  extend type Mutation {
    createCoach(
      userId: ID!
      schoolId: SchoolId! 
      sportId: SportId!
      firstName: String!
      lastName: String!
    ): Coach
  }

  type Coach {
    userId: ID
    schoolId: SchoolId
    sportId: SportId
    firstName: String
    lastName: String
  }
`;

module.exports = { Coach };
