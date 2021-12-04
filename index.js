const { ApolloServer } = require("apollo-server");

const { rootSchema } = require("./graphql/schema");

const CONFIG = {
  port: process.env.APP_PORT || 3000,
};

const server = new ApolloServer(rootSchema);

server.listen(CONFIG).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
