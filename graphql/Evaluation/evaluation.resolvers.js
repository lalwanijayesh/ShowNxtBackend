const {
    storeEvaluation,
    getEvaluationByApplicationAndCoach,
    getEvaluations
} = require("../../dao/evaluation.dao");
const {getApplicationById} = require("../../dao/application.dao");

const evaluationResolvers = {
    Query: {
        evaluation: (parent, args, context, info) => {
            return getEvaluationByApplicationAndCoach(args.applicationId, args.coachId);
        }
    },
    Mutation: {
        makeEvaluation: (parent, args, context, info) => {
            return storeEvaluation(
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
