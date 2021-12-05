const { gql } = require("apollo-server");
const ProfileMeasurable = require("../ProfileMeasurable/profileMeasurable.types");
/**
 * Defines the profile type definition.
 */
const Profile = gql`
  # Extends the top-level root Query object with specific queries
  extend type Query {
    profiles: [Profile!]
    profilesAthlete(user_id: ID!): [Profile!]
    profile(profile_id: ID!): Profile
  }

  extend type Mutation {
    createProfile(
      user_id: ID!
      sport_id: ID!
      position_id: ID!
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
