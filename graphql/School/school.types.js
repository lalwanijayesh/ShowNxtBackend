const { gql } = require("apollo-server");

/**
 * Defines the school type definition.
 */
const School = gql`
  enum Division {
    D1
    D2
    D3
  }

  # Extends the top-level root Query object with specific queries
  extend type Query {
    schools: [School!]
    school(id: ID!): School
  }

  extend type Mutation {
    createSchool(name: String!, location: String!, division: Division!): School
  }

  type School {
    id: ID!
    name: String!
    location: String!
    division: Division!
  }
`;

module.exports = { School };
