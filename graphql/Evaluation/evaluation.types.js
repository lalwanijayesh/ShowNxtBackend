const {gql} = require("apollo-server");
const Evaluation = gql`
  enum EvalStatus {
    dismissed
    accepted
  }
  
  # Extends the top-level root Query object with specific queries
  extend type Query {
    evaluations: [Evaluation!]!
    evaluationsByCoach(coachId: ID!): [Evaluation!]
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
     applicationId: ID
     coachId: ID 
     status: EvalStatus
  }
`;

module.exports = {Evaluation};
