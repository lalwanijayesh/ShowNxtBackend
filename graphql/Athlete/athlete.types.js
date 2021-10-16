const { gql } = require("apollo-server");

/**
 * Defines the athlete type definition.
 */
const Athlete = gql`
  # We don't know what to put here, if we should include an OTHER, but this
  # works for now
  enum SportGender {
    MALE
    FEMALE
  }

  # Extends the top-level root Query object with specific queries
  extend type Query {
    athletes: [Athlete!]
    athlete(id: ID!): Athlete
  }

  extend type Mutation {
    createAthlete(
      firstName: String!
      lastName: String!
      gender: SportGender!
      gpa: Float
      sat: Int
      act: Int
      height: Float
      weight: Float
    ): Athlete
  }

  type Athlete {
    id: ID!
    firstName: String!
    lastName: String!
    gender: SportGender!
    gpa: Float
    sat: Int
    act: Int
    height: Float
    weight: Float
  }
`;

module.exports = { Athlete };
