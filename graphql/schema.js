const { merge } = require("lodash");
const { GraphQLScalarType } = require("graphql");

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
const { Video } = require("./ProfileVideo/video.types");
const { videoResolvers } = require("./ProfileVideo/video.resolvers");

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

const dateScalar = new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue(value) {
        return new Date(value); // Convert incoming integer to Date
    },
    serialize(value) {
        return value.toISOString(); // Convert outgoing Date to string for JSON
    },
});

// any additional resolvers we might need that are not type-specific
const resolvers = {
    Date: dateScalar
};

const rootSchema = {
  typeDefs: [Query, Mutation, User, Athlete, Coach, School, Sport, Profile, ProfileMeasurable, Video],
  resolvers: merge(
    resolvers,
    userResolvers,
    athleteResolvers,
    coachResolvers,
    schoolResolvers,
    sportResolvers,
    profileResolvers,
    profileMeasurableResolvers,
    videoResolvers
  ),
};

module.exports = { rootSchema };
