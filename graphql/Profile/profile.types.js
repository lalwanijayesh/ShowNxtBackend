const { gql } = require("apollo-server");
/**
 * Defines the profile type definition.
 */
const Profile = gql`
  # Extends the top-level root Query object with specific queries
  extend type Query {
    athleteProfiles(user_id: ID!): [Profile!]
    profile(profile_id: ID!): Profile
  }

  extend type Mutation {
    createProfile(
      user_id: ID!
      position_id: ID!
      measurable_ids: [ID!]
      values: [String!] 
      filepaths: [String!] 
      descriptions: [String!] 
    ): Profile
  }

  type Profile {
    profileId: ID!
    athlete: Athlete! 
    positionId: ID!
    measurables: [ProfileMeasurable!] 
    videos: [Video!] 
  }
`;

module.exports = { Profile };
