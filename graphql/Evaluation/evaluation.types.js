const {gql} = require("apollo-server");
const Evaluation = gql`
  enum EvalStatus {
    DISMISS
    ACCEPT 
  }
  
  # Extends the top-level root Query object with specific queries
  extend type Query {
    evaluations: [Evaluation!]!
    evaluation(applicationId: ID!, coachId: ID!): Evaluation
  }

  extend type Mutation {
    makeEvaluation(
      applicationId: ID!
      coachId: ID! 
      status: EvalStatus!
    ): Evaluation
  }

  type Evaluation {
     application: Application
     coachId: ID!
     status: EvalStatus!
  }
`;

module.exports = {Evaluation};
