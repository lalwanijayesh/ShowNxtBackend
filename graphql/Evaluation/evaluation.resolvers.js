const {
    makeEvaluation,
    getEvaluationByApplicationAndCoach,
    getEvaluationsByCoach,
    getEvaluations
} = require("../../dao/evaluation.dao");
const {getApplicationById} = require("../../dao/application.dao");

const evaluationResolvers = {
    Query: {
        evaluations: (parent, args, context, info ) => {
            return getEvaluations();
        },
        evaluationsByCoach: (parent, args, context, info) => {
            return getEvaluationsByCoach(args.coachId);
        },
        evaluation: (parent, args, context, info) => {
            return getEvaluationByApplicationAndCoach(args.applicationId, args.coachId);
        }
    },
    Mutation: {
        makeEvaluation: (parent, args, context, info) => {
            return makeEvaluation(
                args.applicationId,
                args.coachId,
                args.status
            );
        },
    },
    Evaluation: {
        async application(parent) {
            return getApplicationById(parent.applicationId);
        }
    }
};

module.exports = { evaluationResolvers };
