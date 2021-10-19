const { gql } = require("apollo-server");

/**
 * Defines the Application type definition.
 */
const Application = gql`
  # Extends the top-level root Query object with specific queries
  extend type Query {
    coaches: [Application!]
    coach(id: ID!): Application
  }

  extend type Mutation {
    createApplication(
        profileID: Profile!
        schoolID: School!
        sportID: Sport!
        positionID: Position!
    ): Application
  }

  type Application {
    id: ID!
    profileID: Profile!
    schoolID: School!
    sportID: Sport!
    positionID: Position!
  }
`;

module.exports = { Application };
