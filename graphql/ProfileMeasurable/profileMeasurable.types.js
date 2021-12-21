const { gql } = require("apollo-server");

/**
 * Defines the profile type definition.
 */
const ProfileMeasurable = gql`
  # Extends the top-level root Query object with specific queries
  extend type Query {
    profileMeasurablesByProfile(profileId: ID!): [ProfileMeasurable!]
    profileMeasurableByProfileAndMeasurable(profileId: ID!, measurableId: ID!): ProfileMeasurable! 
  }

  extend type Mutation {
    createProfileMeasurable(
      profileId: ID!
      measurableId: ID!
      value: String!
    ): ProfileMeasurable
  }

  type ProfileMeasurable {
    profileId: ID
    measurableId: ID
    value: String
  }
`;

module.exports = { ProfileMeasurable };
