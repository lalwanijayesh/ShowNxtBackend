const { gql } = require("apollo-server");


/**
 * Defines the measurable type definition.
 */
const Measurable = gql`
  # Extends the top-level root Query object with specific queries
  extend type Query {
    measurables: [Measurable!]
    measurable(measurableId: ID!): Measurable
  }

  type Measurable {
    measurableId: ID
    measurableName: String
    format: String
    value: String
  }
`;

module.exports = { Measurable };
