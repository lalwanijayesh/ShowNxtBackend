const { gql } = require("apollo-server");

/**
 * Defines the position type definition.
 */
const CoachOpening = gql`
  # Extends the top-level root Query object with specific queries
  extend type Query {
    coachOpenings: [CoachOpening!]
    coachOpeningById(openingId: ID!): CoachOpening
    coachOpeningsByCoachId(coachId: ID!): [CoachOpening!]
  }
  
  extend type Mutation {
    createCoachOpening(
        coachId: ID!
        positionId: ID! 
        openingCount: Int!  
    ) : CoachOpening
  }

  type CoachOpening {
    coachId: ID
    positionId: ID 
    openingCount: Int
  }
`;

module.exports = { CoachOpening };
