const { gql } = require("apollo-server");

/**
 * Defines the positionMeasurable type definition.
 */
const PositionMeasurable = gql`
  # Extends the top-level root Query object with specific queries
  extend type Query {
    positionMeasurables: [PositionMeasurable!]
    positionMeasurablesByPosition(positionId: ID!): [PositionMeasurable!]
    positionMeasurablesByMeasurable(measurableId: ID!): [PositionMeasurable!]
    positionMeasurable: PositionMeasurable
  }

  type PositionMeasurable {
    positionId: ID
    measurableId: ID
  }
`;

module.exports = { PositionMeasurable };
