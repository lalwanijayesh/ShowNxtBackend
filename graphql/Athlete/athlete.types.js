const { gql } = require("apollo-server");

/**
 * Defines the athlete type definition.
 */
const Athlete = gql`
  enum Gender {
    MALE
    FEMALE
    NONBINARY
    OTHER
  }

  # Extends the top-level root Query object with specific queries
  extend type Query {
    athletes: [Athlete!]
    athlete(userId: ID!): Athlete
  }

  extend type Mutation {
    createAthlete(
      userId: ID!
      firstName: String!
      lastName: String!
      gender: Gender!
      gpa: Float
      sat: Int
      act: Int
      height: Float
      weight: Float
    ): Athlete
  }

  type Athlete {
    userId: ID
    firstName: String
    lastName: String
    gender: Gender
    gpa: Float
    sat: Int
    act: Int
    height: Float
    weight: Float
  }
`;

module.exports = { Athlete };
