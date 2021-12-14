const { gql } = require("apollo-server");

/**
 * Defines the position type definition.
 */
const Position = gql`
  # Extends the top-level root Query object with specific queries
  extend type Query {
    positions: [Position!]
    position(positionId: ID!): Position
    positionsBySport(sportId: ID!): [Position!] 
  }

  type Position {
    positionId: ID
    sportId: ID 
    positionName: String
  }
`;

module.exports = { Position };
