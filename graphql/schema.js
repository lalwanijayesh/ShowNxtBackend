const { merge } = require("lodash");

const { User } = require("./User/user.types");
const { userResolvers } = require("./User/user.resolvers");
const { Athlete } = require("./Athlete/athlete.types");
const { athleteResolvers } = require("./Athlete/athlete.resolvers");
const { School } = require("./School/school.types");
const { schoolResolvers } = require("./School/school.resolvers");
const { Coach } = require("./Coach/coach.types");
const { coachResolvers } = require("./Coach/coach.resolvers");
const { Sport } = require("./Sport/sport.types");
const { sportResolvers } = require("./Sport/sport.resolvers");
const { Position } = require("./Position/position.types");
const { positionResolvers } = require("./Position/position.resolvers");

// Note that we must have at least one field (empty in this case)
// In this set up, we extend the root Query type within individual classes,
// which allows for more flexibility and compatibility. Read the docs for more info on this.
const Query = `
    type Query {
        _empty: String
    }
`;

// Same here
const Mutation = `
    type Mutation {
        _empty: String
    }
`;

const resolvers = {}; // any additional resolvers we might need that are not type-specific

const rootSchema = {
  typeDefs: [Query, Mutation, User, Athlete, Coach, School, Sport, Position],
  resolvers: merge(
    resolvers,
    userResolvers,
    athleteResolvers,
    coachResolvers,
    schoolResolvers,
    sportResolvers,
    positionResolvers
  ),
};

module.exports = { rootSchema };
