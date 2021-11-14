const {gql} = require("apollo-server");

/**
 * Defines the school type definition.
 */
const School = gql`
  
  # Extends the top-level root Query object with specific queries
  extend type Query {
    schools: [School!]
    school(userId: ID!): School
  }

  type School {
    schoolId: ID
    name: String
    location: String
  }
`;

module.exports = { School };
