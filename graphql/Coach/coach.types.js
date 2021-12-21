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
      schoolId: ID!
      sportId: ID!
      firstName: String!
      lastName: String!
      openPositionIds: [ID!] 
      openPositionValues: [Int!] 
    ): Coach
    acceptApplication(
        applicationId: ID! 
        userId: ID! 
    ): Evaluation 
    rejectApplication(
        applicationId: ID! 
        userId: ID! 
    ): Evaluation 
  }

  type Coach {
    userId: ID
    schoolId: ID
    sportId: ID
    firstName: String
    lastName: String
    openPositions: [CoachOpening!]!
    acceptedEvaluations: [Evaluation!]!
    dismissedEvaluations: [Evaluation!]! 
    nextApplication: Application! 
  }
`;

module.exports = { Coach };
