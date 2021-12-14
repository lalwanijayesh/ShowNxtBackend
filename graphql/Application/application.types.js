const {gql} = require("apollo-server");

/**
 * Defines the application type definition.
 */
/*
applicationsByCoach(coach: Coach!, positions: [ID!]) : [Application!]!
    acceptedApplicationsByCoach(coach: Coach!, positions: [ID!]): [Application!]!
    rejectedApplicationsByCoach(coach: Coach!, positions: [ID!]): [Application!]!
    unevaluatedApplicationsByCoach(coach: Coach!, positions: [ID!]): [Application!]!
    applicationsByProfile(profile: Profile!) : [Application!]!
    applicationsByAthlete(athlete: Athlete!) : [Application!]!

 */
/*
            applicationByCoach
            - oldest unevaluated application
            - accepted application from coach
            - rejected applications by coach

         */
const Application = gql`
  
  # Extends the top-level root Query object with specific queries
  extend type Query {
    applications: [Application!]!
    application(appId: ID!): Application
    applicationsByProfile(profileId: ID!): [Application!] 
    nextApplicationByCoach(coachId: ID!): Application
  }

  extend type Mutation {
    createApplication(
      profileId: ID!
      schoolId: ID! 
      positionId: ID!
    ): Application
  }

  type Application {
     profile: Profile 
     schoolId: ID 
     positionId: ID
  }
  
`;

module.exports = {Application};
