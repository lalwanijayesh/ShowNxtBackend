const {gql} = require("apollo-server");

/**
 * Defines the application type definition.
 */
const Application = gql`
  
  # Extends the top-level root Query object with specific queries
  extend type Query {
    applications: [Application!]!
    application(appId: ID!): Application
    applicationsByCoach(coach: Coach!, positions: [Position!]) : [Application!]! 
    acceptedApplicationsByCoach(coach: Coach!, positions: [Position!]): [Application!]!
    rejectedApplicationsByCoach(coach: Coach!, positions: [Position!]): [Application!]!
    unevaluatedApplicationsByCoach(coach: Coach!, positions: [Position!]): [Application!]!
    applicationsByProfile(profile: Profile!) : [Application!]!
    applicationsByAthlete(athlete: Athlete!) : [Application!]! 
  }

  extend type Mutation {
    createApplication(
      profileId: ID!
      schoolId: ID! 
      sportId: ID!
      positionId: ID!
    ): Application
  }

  type Application {
     profileId: ID
     schoolId: ID 
     sportId: ID
     positionId: ID
  }
`;

module.exports = {Application};
