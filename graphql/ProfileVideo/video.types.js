const {gql} = require("apollo-server");

/**
 * Defines the video type definition.
 */
const Video = gql`
  scalar Date

  # Extends the top-level root Query object with specific queries
  extend type Query {
    video (videoId : ID!) : Video,
    videos (profileId: ID!): [Video!]!
  }

  extend type Mutation {
    addProfileVideo (
      profileId: ID!
      filePath: String!
      description: String
    ): Video
  }

  type Video {
    videoId: ID!
    profileId: ID!
    filePath: ID!
    description: String
    uploadDate: Date
  }
`;

module.exports = { Video };
