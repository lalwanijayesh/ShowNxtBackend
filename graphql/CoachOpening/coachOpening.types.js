const { gql } = require("apollo-server");

/**
 * Defines the position type definition.
 */
const CoachOpening = gql`
  extend type Mutation {
    createCoachOpening(
        coachId: ID!
        positionId: ID! 
        openingCount: Int!  
    ) : CoachOpening
  }

  type CoachOpening {
    coachId: ID!
    position: Position!
    openingCount: Int!
  }
`;

module.exports = { CoachOpening };
