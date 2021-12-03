const { gql } = require("apollo-server");

/**
 * Defines the profile type definition.
 */
const Profile = gql`
  # Extends the top-level root Query object with specific queries
  extend type Query {
    profiles: [Profile!]
    profilesAthlete(userId: ID!): [Profile!]
    profile(profileId: ID!): Profile
  }

  extend type Mutation {
    createProfile(
      userId: ID!
      sportId: ID!
      positionId: ID!
    ): Profile
  }

  type Profile {
    profileId: ID
    userId: ID
    sportId: ID
    positionId: ID
  }
`;

module.exports = { Profile };
