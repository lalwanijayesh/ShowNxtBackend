const { gql } = require("apollo-server");

/**
 * Defines the application type definition.
 */
const Application = gql`
  # Extends the top-level root Query object with specific queries
  extend type Query {
    coaches: [Application!]
    coach(id: ID!): Application
  }

  extend type Mutation {
    createApplication(
      userID: User!
      sportID: Sport!
      positionID: Position!
    ): Application
  }

  type Application {
    id: ID!
    userID: User!
    sportID: Sport!
    positionID: Position!
  }
`;

module.exports = { Application };
