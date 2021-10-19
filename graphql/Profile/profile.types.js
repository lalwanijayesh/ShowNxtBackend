const { gql } = require("apollo-server");

/**
 * Defines the Profile type definition.
 */
const Profile = gql`
  # Extends the top-level root Query object with specific queries
  extend type Query {
    coaches: [Profile!]
    coach(id: ID!): Profile
  }

  extend type Mutation {
    createProfile(
      userID: User!
      sportID: Sport!
      positionID: Position!
    ): Profile
  }

  type Profile {
    id: ID!
    userID: User!
    sportID: Sport!
    positionID: Position!
  }
`;

module.exports = { Profile };
