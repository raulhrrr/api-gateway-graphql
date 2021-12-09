const { ApolloServer } = require("apollo-server");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const AuthAPI = require("./dataSources/auth_api");
const PublicationsAPI = require("./dataSources/publications_api")
const authentication = require("./utils/authentication");
const server = new ApolloServer({
  context: 
  authentication,
  typeDefs,
  resolvers,
  dataSources: () => ({
    authAPI: new AuthAPI(),
    publicationsAPI: new PublicationsAPI(),
  }),
  introspection: true,
  playground: true,
});
server.listen(process.env.PORT || 4000).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
