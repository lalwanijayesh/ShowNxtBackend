const { gql } = require("apollo-server");

/**
 * Defines the sportOffering type definition.
 */
const SportOffering = gql`
  enum Gender {
    MALE
    FEMALE
    NONBINARY
    OTHER
  }

  # Extends the top-level root Query object with specific queries
  extend type Query {
    sportOfferings: [SportOffering!]
    sportOffering(sportOfferingId: ID!): SportOffering
  }

  type SportOffering {
    offeringId: ID!
    schoolId: ID!
    sport: Sport
  }
`;

module.exports = { SportOffering };
