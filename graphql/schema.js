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
const { Profile } = require("./Profile/profile.types");
const { profileResolvers } = require("./Profile/profile.resolvers");
const { ProfileMeasurable } = require("./ProfileMeasurable/profileMeasurable.types");
const { profileMeasurableResolvers } = require("./ProfileMeasurable/profileMeasurable.resolvers");

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
  typeDefs: [Query, Mutation, User, Athlete, Coach, School, Sport, Profile, ProfileMeasurable],
  resolvers: merge(
    resolvers,
    userResolvers,
    athleteResolvers,
    coachResolvers,
    schoolResolvers,
    sportResolvers,
    profileResolvers,
    profileMeasurableResolvers
  ),
};

module.exports = { rootSchema };
